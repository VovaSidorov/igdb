import React, {Component} from 'react';
import axios from 'axios'

export default class Home extends Component {
    state={
        proxyurl:"https://cors-anywhere.herokuapp.com/",
        apiUrl:"https://api-v3.igdb.com/games",
        apiRequest:"fields id,screenshots.*,name,popularity,summary; where id = 115278;",
        games:[],
    }
    
    render() {
        const {match:{params}} = this.props;
        const {games} = this.state;
    

        return (
            <div className="card">
            <div>{ params.id }</div>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card titlsdfsdfsdfsde</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            </div>
        </div>
        );
    }
    componentDidMount() {
        const {proxyurl} = this.state
        const {apiUrl} = this.state;
        const {apiRequest} = this.state;
        this.fetchApiData(proxyurl+apiUrl,apiRequest);
    }

    fetchApiData(apiUrl,apiRequest){
        axios({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': "e43d1f862600dbac21ab86f17dcec794"
            },
            data: apiRequest
        })
            .then(res => {
                this.setState({
                    games: [...res.data]
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    filterGame(params){
        console.log(params.id);
        const {proxyurl} = this.state;
        const {apiUrl} = this.state;
        const apiRequest = `fields screenshots.*,name,popularity,summary; where id = 115278;`;
        this.fetchApiData(proxyurl+apiUrl,apiRequest);
    }
}
