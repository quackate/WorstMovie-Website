  
import os
from flask_admin import Admin
from .models import db, User,Login, Movies, Watchlist, Movie_Rating, Comments, Likes, Dislikes
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Login, db.session))
    admin.add_view(ModelView(Movies, db.session))
    admin.add_view(ModelView(Watchlist, db.session))
    admin.add_view(ModelView(Movie_Rating, db.session))
    admin.add_view(ModelView(Comments, db.session))
    admin.add_view(ModelView(Likes, db.session))
    admin.add_view(ModelView(Dislikes, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))