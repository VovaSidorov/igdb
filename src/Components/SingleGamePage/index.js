import React, {Component} from 'react';
import SingleGamePageCard from '../SingleGamePageCard'
import axios from 'axios'

export default class Home extends Component {
    state={
        proxyurl:"https://cors-anywhere.herokuapp.com/",
        apiUrl:"https://api-v3.igdb.com/games",
        games:[],
    };

    render() {
        const {games} = this.state;

        return (

         <div className="container d-flex justify-content-center">
                {
                    games.map(el => (<SingleGamePageCard {...el} key={el.id} />))
                }
         </div>

        );
    }
    componentDidMount() {
        const {match:{params}} = this.props;
        const idGame = params.id;
        const {proxyurl} = this.state;
        const {apiUrl} = this.state;
        this.fetchApiData(proxyurl+apiUrl,idGame);
    }

    fetchApiData(apiUrl,idGame){
        axios({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': "e43d1f862600dbac21ab86f17dcec794"
            },
            data: `fields id,screenshots.*,name,popularity,summary; where id = ${idGame};`
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

}
