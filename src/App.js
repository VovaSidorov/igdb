import React, {Component} from 'react';
import Header from './Components/Header'
import SearchSection from './Components/ SearchSection'
import TopGames from './Components/TopGames'
import axios from 'axios'

class App extends Component {
    state={
        apiUrl:"https://api-v3.igdb.com/games",
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
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const {apiUrl} = this.state;
        this.fetchApiData(proxyurl+apiUrl);
    }

    fetchApiData(apiUrl){
        axios({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': "e43d1f862600dbac21ab86f17dcec794"
            },
            data: "fields screenshots.*,name,popularity,summary; sort popularity desc;"
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

    foo(){
        console.log("FOOOO!!");
    }

}

export default App;
