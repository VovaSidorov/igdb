import React from 'react';
import GameCard from '../GameCard'

export default ({games}) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                        <h1>TOP 10 GAMES</h1>
                </div>
                {
                    games.map(el => (<GameCard {...el} key={el.id} />))
                }
            </div>
        </div>
    );
}