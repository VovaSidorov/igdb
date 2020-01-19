import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <Link to="/" className="nav-item active" className="nav-link">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}