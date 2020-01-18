import React from 'react';

export default () => {
    return (
        <div className="card col-6 mt-5">
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card with stretched link</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                </div>
        </div>
    );
}