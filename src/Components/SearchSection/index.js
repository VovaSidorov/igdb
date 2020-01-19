import React, {Component} from 'react';

export default class FilterCharacter extends Component {

    state = {
        name: "",
    };

    render() {
        const {filterGame} = this.props;
        return (
            <div className="container mt-5 d-flex justify-content-center">
                <form className="form-inline" onSubmit={(event) => {
                    this.submitFilterHandler(event, filterGame)
                }}>
                    <label htmlFor="exampleInputEmail1" className='mr-2' >Search by game name</label>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                           onInput={this.inputNameHandler}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }

    inputNameHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    submitFilterHandler = (e, filterGame) => {
        console.log("submitFilterHandler");
        e.preventDefault();
        const {name} = this.state;

        if (this.hasDataToFilter(this.state)) {
            const o = {};

            if (name) {
                o.name = name
            }
            console.log(o);
            filterGame(o);
            console.log(filterGame);
        }
    };

    hasDataToFilter = ({name}) => name;
}