import React, { useContext , useState , useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/genre.css";
import {Link, useNavigate} from "react-router-dom";

import { GenreCard } from "../../component/genre_card";

export const Horror_Genre = () => {
	const { store, actions } = useContext(Context);

	/*useEffect(() => {
        actions.getToken()
    }, [])*/
	
	return (
		<div className="genrepage-wrapper">
            <h1 className="genrepage-title mb-5 text-center"><span className="genrepage-purple">Horror</span> Movies <i className="fas fa-film film-icon"></i></h1>
			<div className="">
					{store.horror_movies?.map((movies) => (
						<GenreCard poster_path={movies.poster_path} title={movies.title} vote_average={movies.vote_average} date={movies.release_date} description={movies.overview} id={movies.id}/>
					))}
				</div>
		</div>
	);
};