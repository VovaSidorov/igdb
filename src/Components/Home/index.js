import React, {Component} from 'react';
import Header from '../Header'
import SearchSection from '../SearchSection'
import TopGames from '../TopGames'
import axios from 'axios'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.filterGame = this.filterGame.bind(this);
    }
    state={
        proxyurl:"https://cors-anywhere.herokuapp.com/",
        apiUrl:"https://api-v3.igdb.com/games",
        apiRequest:"fields id,screenshots.*,name,popularity,summary; sort popularity desc;",
        games:[],
    }
  render() {
      const {games} = this.state;
      return (
      <div className="App">
          <Header/>
          <SearchSection filterGame={this.filterGame}/>
          <TopGames games={games}/>
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
        console.log(apiUrl);
        console.log(apiRequest);
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
                console.log(res.data);
                this.setState({
                    games: [...res.data]
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    filterGame(filterObject){
        console.log(filterObject.name);
        const {proxyurl} = this.state;
        const {apiUrl} = this.state;
        const apiRequest = `fields screenshots.*,name,popularity,summary; search \"${filterObject.name}\";`;
        this.fetchApiData(proxyurl+apiUrl,apiRequest);
    }

}