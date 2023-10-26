import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/detail.css";
import { Context } from "../store/appContext";

export const CommentCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="commentcard-wrapper">
            <li className="comment-item comment-card px-5 text-white mb-3">
                <div className="top-of-comment d-flex">
                    <p><strong>@{props.username}</strong></p>
                    <div className="dropdown">
                        <button className="menu-btn btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-v pt-2"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-comments dropdown-menu-dark dropdown-menu-end">
                            <li className="dropdown-item"><i className="fas fa-pencil-alt me-3"></i>Edit</li>
                            <li className="dropdown-item" onClick={() => { deleteComment(props.index) }}><i className="far fa-trash-alt me-3"></i>Delete</li>
                        </ul>
                    </div>
                </div>
                <p>{props.content}</p>
                <div className="likes-and-dislikes d-flex">
                    <div className="likes d-flex me-4">
                        <i className="far fa-thumbs-up me-2"></i>
                        <p>{props.likes}</p>
                    </div>
                    <div className="dislikes d-flex">
                        <i className="far fa-thumbs-down me-2"></i>
                        <p>{props.dislikes}</p>
                    </div>
                </div>
            </li>
        </div>
    );
};