import React from 'react';

export default (props) => {
    const {foo} = props;
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form className="form-inline" onSubmit={(event) => {submitFilterHandler(event,foo)}}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
}
const submitFilterHandler = (e,foo) => {
    console.log("submitFilterHandler");
    e.preventDefault();

    if(hasDataToFilter(e)){
        const search = getSearchValue(e);
        foo(search);
    }
};

const getSearchValue = (e) => {
    return e.target[0].value;
};
const hasDataToFilter = (e) => getSearchValue(e);
