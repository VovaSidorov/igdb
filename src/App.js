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
          <SearchSection/>
          <TopGames games={games}/>
      </div>
      );
  }
    componentDidMount() {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const zapr ="?fields=screenshots.*,name,popularity,summary&order=popularity:desc";
        const {apiUrl} = this.state;
        axios.get(proxyurl+apiUrl+zapr, {
                headers: {
                    "user-key": "e43d1f862600dbac21ab86f17dcec794",
                    Accept: "application/json"
                }
            }
            )
            .then(res=>{
                // console.log(res.data);
                this.setState({
                    games: [...res.data]
                })
            })
    }

}

export default App;
