const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			horror_movies: [],
			romance_movies: [],
			action_movies: [],
			adventure_movies: [],
			animation_movies: [],
			comedy_movies: [],
			crime_movies: [],
			documentary_movies: [],
			drama_movies: [],
			family_movies: [],
			fantasy_movies: [],
			history_movies: [],
			music_movies: [],
			mystery_movies: [],
			sciencefiction_movies: [],
			thriller_movies: [],
			watchlist: [],
			comments: [],
			liked: false,
			disliked: false,
			token: null
		},
		actions: {
			getHorrorMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.1&sort_by=vote_average.asc&with_genres=27&vote_average.gte=2&vote_count.gte=800`).then(resp => resp.json())
					.then(data => {
						setStore({ horror_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getRomanceMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10749&vote_average.gte=2&vote_count.gte=475`).then(resp => resp.json())
					.then(data => {
						setStore({ romance_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getActionMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=28%2C%2012&vote_average.gte=2&vote_count.gte=750`).then(resp => resp.json())
					.then(data => {
						setStore({ action_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getAdventureMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5&sort_by=vote_average.asc&with_genres=12&vote_average.gte=2&vote_count.gte=800`).then(resp => resp.json())
					.then(data => {
						setStore({ adventure_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getAnimationMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=16&vote_average.gte=2&vote_count.gte=100`).then(resp => resp.json())
					.then(data => {
						setStore({ animation_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getComedyMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5&sort_by=vote_average.asc&with_genres=35&vote_average.gte=2&vote_count.gte=800`).then(resp => resp.json())
					.then(data => {
						setStore({ comedy_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getCrimeMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=80&vote_average.gte=2&vote_count.gte=500`).then(resp => resp.json())
					.then(data => {
						setStore({ crime_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getDocumentaryMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=99&vote_average.gte=2&vote_count.gte=45`).then(resp => resp.json())
					.then(data => {
						setStore({ documentary_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getDramaMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=18&vote_average.gte=2&vote_count.gte=500`).then(resp => resp.json())
					.then(data => {
						setStore({ drama_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getFamilyMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10751&vote_average.gte=2&vote_count.gte=500`).then(resp => resp.json())
					.then(data => {
						setStore({ family_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getFantasyMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=14&vote_average.gte=2&vote_count.gte=700`).then(resp => resp.json())
					.then(data => {
						setStore({ fantasy_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getHistoryMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=36&vote_average.gte=2&vote_count.gte=30`).then(resp => resp.json())
					.then(data => {
						setStore({ history_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getMusicMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=10402&vote_average.gte=2&vote_count.gte=35`).then(resp => resp.json())
					.then(data => {
						setStore({ music_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getMysteryMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=9648&vote_average.gte=2&vote_count.gte=400`).then(resp => resp.json())
					.then(data => {
						setStore({ mystery_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getScienceFictionMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=878&vote_average.gte=2&vote_count.gte=800`).then(resp => resp.json())
					.then(data => {
						setStore({ sciencefiction_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			getThrillerMovies: () => {
				const store = getStore();
				fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&vote_average.lte=5.2&sort_by=vote_average.asc&with_genres=53&vote_average.gte=2&vote_count.gte=800`).then(resp => resp.json())
					.then(data => {
						setStore({ thriller_movies: data.results })
					})
					.catch(error => {
						console.log(error);
					});
			},
			addToWatchlist: (movie) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({
						movie_id: movie.id,
						movie: { image: `https://image.tmdb.org/t/p/original${movie.poster_path}`, ...movie }
					}),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}

				fetch(`${process.env.BACKEND_URL}api/watchlist`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						const store = getStore();
						console.log(store.watchlist)
						const item_watchlist = store.watchlist.concat(movie);
						setStore({ watchlist: item_watchlist });
					})
					.catch(error => {
						console.log(error);
					});
			},
			deleteFromWatchlist: (movie, index) => {
				let options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}

				fetch(`${process.env.BACKEND_URL}api/watchlist/${movie.id}`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						const store = getStore();
						console.log(store.watchlist)
						const item_watchlist = store.watchlist.filter((c, i) => {
							return c.id !== movie.id
						});
						setStore({ watchlist: item_watchlist });
					})
					.catch(error => {
						console.log(error);
					});
			},
			getWatchlistFromDB: async (setWatchlist) => {
				let options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				}
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}api/watchlist`, options)
					const data = await resp.json()
					setWatchlist(data)
				} catch (error) {
					console.log(error)
				}
			},
			getTopTen: (setTopTen) => {
				let options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}

				fetch(`${process.env.BACKEND_URL}api/top_ten`, options)
					.then(resp => resp.json())
					.then(data => {
						setTopTen(data)
					})
					.catch(error => {
						console.log(error);
					});
			},
			getMovieById: (movieId, setMovieDetail) => {
				const options = {
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
					}
				};
				fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIEDB_API_KEY}`)
					.then(response => response.json())
					.then(response => {
						console.log(response);
						setMovieDetail(response)
					})
					.catch(err => console.error(err));
			},
			getTrailerForMovie: async (movieId, setVideoKey) => {
				try {
					const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.MOVIEDB_API_KEY}`;
					const response = await fetch(videoUrl);
					const data = await response.json();
					if (data.results && data.results[0] && data.results[0].key) {
						setVideoKey(data.results[0].key);
					} else {
						console.error('No video key found in response');
					}
				} catch (error) {
					console.error(error);
				}
			},
			rateMovie: async (movie, rating, movie_poster) => {
                try {
					console.log("---------------------",movie,rating)
                    const response = await fetch(`${process.env.BACKEND_URL}api/rate_movie`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${getActions().getToken()}` 
                        },
                        body: JSON.stringify({  movie: { image: `https://image.tmdb.org/t/p/original${movie_poster}`, ...movie}, rating })
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log(data); // Log the response from the server (optional)
                        return data; // Return data if needed
                    } else {
                        console.log('Error rating movie:', response.status, response.statusText);
                        return null; // Return null or handle the error as needed
                    }
                } catch (error) {
                    console.log('Error rating movie:', error);
                    return null; // Return null or handle the error as needed
                }
            },
			getUserRating: (movieId, setUserRating) => {
				console.log("hello", getActions().getToken(), movieId)
				const options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					},
				};
				fetch(`${process.env.BACKEND_URL}api/movie_rating/${movieId}`, options)
					.then(response => response.json())
					.then(response => {
						console.log(response);
						if (response && response.rating) setUserRating(response.rating)
					})
					.catch(err => console.log(err));
			},
			signUp: (username, name, email, password, alert) => {
				var options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username: username, name: name, email: email, password: password })
				}
				fetch(process.env.BACKEND_URL + '/api/registration', options)
					.then(response => {
						if (response.ok) return response.json()
						else throw Error('Something went wrong')
					})
					.then(data => {
						console.log(data)
						alert("Registration successful!")
						return true
					})
					.catch(error => {
						console.log(error)
						alert("Something went wrong!")
						return false
					})
			},
			logIn: async (email, password, alert) => {
				var options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				}

				try {
					const resp = await fetch(process.env.BACKEND_URL + 'api/login', options)
					const data = await resp.json()
					if (data && data.token) {
						localStorage.setItem("token", data.token)
						setStore({"user_id": data.user_id})
						alert("Login successful!")
					}
					return true
				}

				catch (error) {
					console.log(error)
					return false
				}
			},
			getToken: () => {
				const token = localStorage.getItem("token")
				setStore({ token: token })
				return token
			},
			logout: () => {
				return localStorage.removeItem("token");
			},
			sendForgotPasswordEmail: (email, alert) => {
				var options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email })
				}
				fetch(process.env.BACKEND_URL + '/api/sendemail', options)
					.then(response => {
						if (response.ok) return response.json()
						else throw Error('Something went wrong with send email')
					})
					.then(data => {
						console.log(data)
						if (data && data.msg == "success") alert("Check your inbox! You will recieve further instructions for resetting your password. Be sure to also check your spam folder!")
					})
					.catch(error => {
						console.log(error)
						alert("ERROR: Something went wrong!");
					})
			},
			setNewPassword: (token, password, alert) => {
				var options = {
					method: "POST",
					headers: { 
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
				},
					body: JSON.stringify({ password: password })
				}
				fetch(process.env.BACKEND_URL + 'api/resetpassword', options)
					.then(response => {
						if (response.ok) return response.json()
						else throw Error('Something went wrong')
					})
					.then(data => {
						console.log(data)
						if (data && data.msg == "success") alert("Password changed successfully!")
					})
					.catch(error => {
						console.log(error)
						alert("ERROR: Something went wrong!");
					})
			},
			getComments: async (setComments, movie_id) => {
				let options = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}api/comments/${movie_id}`, options)
					const data = await resp.json()
					setComments(data)
					console.log("------------------", data)
				} catch (error) {
					console.log(error)
				}
			},
			addComment: (movie, movie_poster, movie_id, content) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({ movie: {image:`https://image.tmdb.org/t/p/original${movie_poster}`, ...movie}, movie_id: movie_id, content: content, like_total: 0, dislike_total: 0 }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}

				fetch(`${process.env.BACKEND_URL}api/comments`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						const store = getStore();
						console.log(store.comments)
						const item_comment = store.comments.concat(data);
						setStore({ comments: item_comment });
					})
					.catch(error => {
						console.log(error);
					});
			},
			deleteComment: (comment_id) => {
				let options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}
			
				fetch(`${process.env.BACKEND_URL}api/comments/${comment_id}`, options)
					.then(resp => {
						if (!resp.ok) {
							throw new Error(`HTTP error! status: ${resp.status}`);
						}
						return resp.json();
					})
					.then(data => {
						console.log('Comment deleted successfully');
						const store = getStore();
						const updatedComments = store.comments.filter(comment => comment.id !== comment_id);
						setStore({ comments: updatedComments });
					})
					.catch(error => {
						console.error('Error:', error);
					});
			},
			likeComment: (like, comment_id) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({ like_total: like }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}
			
				fetch(`${process.env.BACKEND_URL}api/comments/like/${comment_id}`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						//setLiked(true)
						const store = getStore();
						console.log(store.comments)
						const liked = localStorage.setItem("liked", true)
						setStore ({ liked: liked })
						
						// Update the comment in the store with the new data
						const updatedComments = store.comments.map(comment => {
							if (comment.id === comment_id) {
								return data;
							}
							return comment;
						});
			
						setStore({ comments: updatedComments });
					})
					.catch(error => {
						console.log(error);
					});
			},
			dislikeComment: (dislike, comment_id) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({ dislike_total: dislike }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}
			
				fetch(`${process.env.BACKEND_URL}api/comments/dislike/${comment_id}`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						const store = getStore();
						console.log(store.comments)
						setStore ({ disliked: true })
						
						// Update the comment in the store with the new data
						const updatedComments = store.comments.map(comment => {
							if (comment.id === comment_id) {
								return data;
							}
							return comment;
						});
			
						setStore({ comments: updatedComments });
					})
					.catch(error => {
						console.log(error);
					});
			},
			removeLike: (like, comment_id) => {
				let options = {
					method: 'PUT',
					body: JSON.stringify({ like_total: like }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}
			
				fetch(`${process.env.BACKEND_URL}api/comments/rmv_like/${comment_id}`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						//setLiked(false)
						const store = getStore();
						console.log(store.comments)
						const liked = localStorage.setItem("liked", false)
						setStore ({ liked: liked })
						
						// Update the comment in the store with the new data
						const updatedComments = store.comments.map(comment => {
							if (comment.id === comment_id) {
								return data;
							}
							return comment;
						});
			
						setStore({ comments: updatedComments });
					})
					.catch(error => {
						console.log(error);
					});
			},
			removeDislike: (dislike, comment_id) => {
				let options = {
					method: 'PUT',
					body: JSON.stringify({ dislike_total: dislike }),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getActions().getToken()}`
					}
				}
			
				fetch(`${process.env.BACKEND_URL}api/comments/rmv_dislike/${comment_id}`, options)
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						const store = getStore();
						console.log(store.comments)
						setStore ({ disliked: false })
						
						// Update the comment in the store with the new data
						const updatedComments = store.comments.map(comment => {
							if (comment.id === comment_id) {
								return data;
							}
							return comment;
						});
			
						setStore({ comments: updatedComments });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	}
}

export default getState;