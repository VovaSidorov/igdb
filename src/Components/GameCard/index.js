import React from 'react';
import {Link} from "react-router-dom";

export default (props) => {
    const {id,name,summary,screenshots} = props;
    const img=screenshots[0].image_id;
    const urlImage1 = "https://images.igdb.com/igdb/image/upload/t_cover_big/"+img+".jpg";
    return (
        <div className="card col-6 mt-5">
            <img src= {urlImage1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{summary}</p>
                    <Link to={`/game/${id}`}>
                        <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                    </Link>
                </div>
        </div>
    );
}