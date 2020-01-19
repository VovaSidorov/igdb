import React from 'react';

export default () => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form className="form-inline" onSubmit={submitFilterHandler}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
}
const submitFilterHandler = (e) => {
    console.log("submitFilterHandler");
    e.preventDefault();

    if(hasDataToFilter(e)){
        console.log(getSearchValue(e));
    }

};

const getSearchValue = (e) => {
    return e.target[0].value;
};
const hasDataToFilter = (e) => getSearchValue(e);
