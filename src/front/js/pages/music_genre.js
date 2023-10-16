import React, { useContext , useState , useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/genre.css";
import {Link, useNavigate} from "react-router-dom";

import { GenreCard } from "../component/genre_card";

export const Music_Genre = () => {
	const { store, actions } = useContext(Context);

	/*useEffect(() => {
        actions.getToken()
    }, [])*/
	
	return (
		<div className="genrepage-wrapper">
            <h1 className="genrepage-title mb-5 text-center"><span className="genrepage-purple">Music</span> Movies <i className="fas fa-film film-icon"></i></h1>
			<div className="">
					{store.music_movies?.map((movies) => (
						<GenreCard img_src={movies.poster_path} title={movies.title} rating={movies.vote_average} date={movies.release_date} description={movies.overview} id={movies.id}/>
					))}
				</div>
		</div>
	);
};