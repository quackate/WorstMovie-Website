"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Login, Movies, Watchlist, Movie_Rating, Comments, Likes, Dislikes
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin, CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
# from flask_mail import Mail, Message

api = Blueprint('api', __name__)
CORS(api)


@api.route('/hello', methods=['POST'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/registration', methods=['POST'])
def signUp():
    username = request.json.get("username", None)
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    existing_user_email = User.query.filter_by(email=email).first()
    existing_user_username = User.query.filter_by(username=username).first()
    if existing_user_email is not None or existing_user_username is not None:
        return jsonify({"msg": "Did you drop a glass of watter in a Gremlyn? We´ve got clones here,, dude...Try another email or username..or call Terminator"}), 401
    user = User(
        username=username,
        name=name,
        email=email,
        password=password,
        is_active=True
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Allrrrright!! User added succesfully"}), 200


@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Please check your email or password, something went wrong."}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id})


@api.route('/resetpassword', methods=['POST'])
@jwt_required()
def reset_password():
    email = get_jwt_identity()
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "User with this email doesn't exist."}), 401

    user.password = password
    db.session.commit()

    return jsonify({"msg": "success"}), 200


@api.route('/rate_movie', methods=['POST'])
@jwt_required()
@cross_origin(supports_credentials=True)
def rate_movie():
    data = request.json

    user_id = get_jwt_identity()
    movie = data.get('movie')
    rating = data.get('rating')

    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    movie_info = Movies.query.get(movie["id"])
    if not movie_info:
        new_movie = Movies(
            id=movie["id"],
            title=movie["title"],
            rating=movie["vote_average"],
            image=movie["image"],
        )
        db.session.add(new_movie)
        db.session.commit()

    try:
        # Create a new movie rating
        new_rating = Movie_Rating(
            user_id=user_id, movie_id=movie["id"], rating=rating)

        db.session.add(new_rating)
        db.session.commit()

        ratings = Movie_Rating.query.filter_by(movie_id=movie['id']).all()
        print(ratings)
        rating_sum = 0

        for item in ratings:
            rating_sum = rating_sum + item.rating

        average = rating_sum/len(ratings)

        movie_to_update = Movies.query.get(movie['id'])
        movie_to_update.rating = average
        db.session.commit()

        return jsonify({'message': 'Rating submitted successfully'}), 201

    except Exception as e:
        print(e)
        return jsonify({'message': f'Error submitting rating: {str(e)}'}), 500


@api.route('/top_ten', methods=['GET'])
def movie_avg():
    if request.method == 'GET':
        ratings = []
        movies = Movies.query.filter().order_by(Movies.rating.asc()).limit(10)
        for item in movies:
            ratings.append(item.serialize())

        return jsonify(ratings), 200

    return "Invalid Method", 404


@api.route('/movie_rating/<int:movie_id>', methods=['GET'])
@jwt_required()
@cross_origin(supports_credentials=True)
def movie_rating(movie_id):
    user_id = get_jwt_identity()
    print(user_id, movie_id)
    movie_rating = Movie_Rating.query.filter_by(
        user_id=user_id, movie_id=movie_id).first()
    return jsonify(movie_rating.serialize()), 200


@api.route('/watchlist', methods=['POST'])
@jwt_required()
def addto_watchlist():
    if request.method == 'POST':
        movie = Movies.query.filter_by(
            id=request.get_json()['movie_id']).first()
        if movie is None:
            movie = Movies()
            movie.id = request.get_json()['movie_id']
            movie.title = request.get_json()['movie']['title']
            movie.rating = request.get_json()['movie']['rating']
            movie.image = request.get_json()['movie']['image']

            db.session.add(movie)
            db.session.commit()

        watchlist = Watchlist()
        watchlist.author_id = get_jwt_identity()
        watchlist.movie_id = request.get_json()['movie_id']

        db.session.add(watchlist)
        db.session.commit()
        # Show the updated version of the watchlist
        watchlist = []
        db_result = Watchlist.query.all()
        for item in db_result:
            watchlist.append(item.serialize())
        return jsonify(watchlist), 200


@api.route('/watchlist', methods=['GET'])
@jwt_required()
def getfrom_watchlist():
    if request.method == 'GET':
        watchlist = Watchlist.query.filter_by(
            author_id=get_jwt_identity()).all()
        movies = []
        print(watchlist)

        for item in watchlist:
            movies.append(item.movie_id)

        movie = Movies.query.filter(Movies.id.in_((movies))).all()
        movie_array = []

        for m in movie:
            movie_array.append(m.serialize())
        print(movie_array)
        return jsonify(movie_array), 200

    return "Invalid Method", 404


@api.route('/watchlist/<int:movie_id>', methods=['DELETE'])
@jwt_required()
def deletefrom_watchlist(movie_id):
    if request.method == 'DELETE':
        watchlist = Watchlist.query.filter_by(
            movie_id=movie_id, author_id=get_jwt_identity()).first()

        db.session.delete(watchlist)
        db.session.commit()

        # Show the updated version
        watchlist_items = []
        db_result = Watchlist.query.filter_by(author_id=get_jwt_identity())
        for item in db_result:
            watchlist_items.append(item.serialize())
        return jsonify(watchlist_items), 200

    return "Invalid Method", 404


@api.route('/comments', methods=['POST'])
@jwt_required()
def add_comment():
    if request.method == 'POST':
        data = request.json
        user_id = get_jwt_identity()
        movie = data.get('movie')

        user = User.query.get(user_id)
        if not user:
            return jsonify({'message': 'User not found'}), 404

        movie_info = Movies.query.get(movie["id"])
        if not movie_info:
            new_movie = Movies(
                id=movie["id"],
                title=movie["title"],
                rating=movie["vote_average"],
                image=movie["image"],
            )
            db.session.add(new_movie)
            db.session.commit()

        comment = Comments()
        comment.author_id = get_jwt_identity()
        comment.movie_id = request.get_json()['movie_id']
        comment.content = request.get_json()['content']
        comment.like_total = request.get_json()['like_total']
        comment.dislike_total = request.get_json()['dislike_total']

        db.session.add(comment)
        db.session.commit()

        # Show the updated version of the comments
        comments = []
        db_result = Comments.query.all()
        for item in db_result:
            comments.append(item.serialize())
        return jsonify(comments), 200


@api.route('/comments/<int:comment_id>', methods=['DELETE'])
@jwt_required()
def delete_comment(comment_id):
    if request.method == 'DELETE':
        comment = Comments.query.get(comment_id)
        user_id = get_jwt_identity()

        if not comment:
            return jsonify({'message': 'Comment not found'}), 404

        if comment.author_id != user_id:
            return jsonify({'message': 'You are not authorized to edit this comment'}), 403

        db.session.delete(comment)
        db.session.commit()

        return jsonify({'message': 'Comment deleted successfully'}), 200
    

@api.route('/comments/<int:movie_id>', methods=['GET'])
def get_comment(movie_id):
    if request.method == 'GET':
        comments = db.session.query(
            Comments.id,
            Comments.movie_id,
            Comments.content,
            Comments.like_total,
            Comments.dislike_total,
            User.username,  # Include the username from the Users table
        ).join(
            User, User.id == Comments.author_id
        ).filter(
            Comments.movie_id == movie_id
        ).all()

        comment_array = []

        for comment in comments:
            comment_dict = {
                'id': comment.id,
                'movie_id': comment.movie_id,
                'content': comment.content,
                'like_total': comment.like_total,
                'dislike_total': comment.dislike_total,
                'author_username': comment.username
            }
            comment_array.append(comment_dict)

    return jsonify(comment_array), 200

#Something I'm trying
@api.route('/comments/like/<int:comment_id>', methods=['POST'])
@jwt_required()
def like_comment(comment_id):
    if request.method == 'POST':
        data = request.json
        user_id = get_jwt_identity()
        comment = Comments.query.get(comment_id)

        if not comment:
            return jsonify({'message': 'Comment not found'}), 404

        user_liked = Likes.query.filter_by(user_id=user_id, comment_id=comment_id).first()
        if user_liked:
            return jsonify({'message': 'You have already liked this comment'}), 400

        like = Likes(user_id=user_id, comment_id=comment_id)
        db.session.add(like)
        db.session.commit()

        #comment = Comments.query.get(comment_id)
        #if not comment:
            #return jsonify({'message': 'Comment not found'}), 404

        #if comment.author_id != user_id:
            #return jsonify({'message': 'You are not authorized to edit this #comment'}), 403

        # Update like_total and dislike_total if they are present in the request
        if 'like_total' in data:
            comment.like_total = data['like_total'] + 1

        db.session.commit()

        return jsonify({'message': 'Comment liked successfully'}, comment.serialize()), 200


@api.route('/comments/rmv_like/<int:comment_id>', methods=['PUT'])
@jwt_required()
def remove_like(comment_id):
    if request.method == 'PUT':
        data = request.json
        user_id = get_jwt_identity()
        comment = Comments.query.get(comment_id)

        if not comment:
            return jsonify({'message': 'Comment not found'}), 404
        
        user_liked = Likes.query.filter_by(user_id=user_id, comment_id=comment_id).first()
        if not user_liked:
            return jsonify({"message": "You haven't liked this comment"}), 400

        db.session.delete(user_liked)
        db.session.commit()

        #if comment.author_id != user_id:
            #return jsonify({'message': 'You are not authorized to edit this #comment'}), 403

        # Update like_total and dislike_total if they are present in the request
        if 'like_total' in data:
            comment.like_total = data['like_total'] - 1
        if 'dislike_total' in data:
            comment.dislike_total = data['dislike_total'] - 1

        db.session.commit()

        return jsonify({'message': 'Comment liked removed successfully'}, comment.serialize()), 200

@api.route('/comments/dislike/<int:comment_id>', methods=['POST'])
@jwt_required()
def dislike_comment(comment_id):
    if request.method == 'POST':
        data = request.json
        user_id = get_jwt_identity()
        comment = Comments.query.get(comment_id)

        if not comment:
            return jsonify({'message': 'Comment not found'}), 404

        user_disliked = Dislikes.query.filter_by(user_id=user_id, comment_id=comment_id).first()
        if user_disliked:
            return jsonify({'message': 'You have already disliked this comment'}), 400

        dislike = Dislikes(user_id=user_id, comment_id=comment_id)
        db.session.add(dislike)
        db.session.commit()

        if 'dislike_total' in data:
            comment.dislike_total = data['dislike_total'] + 1

        db.session.commit()

        return jsonify({'message': 'Comment disliked successfully'}, comment.serialize()), 200
    
@api.route('/comments/rmv_dislike/<int:comment_id>', methods=['PUT'])
@jwt_required()
def remove_dislike(comment_id):
    if request.method == 'PUT':
        data = request.json
        user_id = get_jwt_identity()
        comment = Comments.query.get(comment_id)

        if not comment:
            return jsonify({'message': 'Comment not found'}), 404
        
        user_disliked = Dislikes.query.filter_by(user_id=user_id, comment_id=comment_id).first()
        if not user_disliked:
            return jsonify({"message": "You haven't disliked this comment"}), 400

        db.session.delete(user_disliked)
        db.session.commit()

        if 'dislike_total' in data:
            comment.dislike_total = data['dislike_total'] - 1

        db.session.commit()

        return jsonify({'message': 'Comment disliked removed successfully'}, comment.serialize()), 200