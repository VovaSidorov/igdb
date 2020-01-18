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
          <TopGames/>
      </div>
      );
  }
    componentDidMount() {

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const {apiUrl} = this.state;
        axios.get(proxyurl+apiUrl, {
                headers: {
                    "user-key": "e43d1f862600dbac21ab86f17dcec794",
                    Accept: "application/json"
                }
            }
            )
            .then(res=>{
                console.log(res.data);
                this.setState({
                    games: [...res.data]
                })
            })



        // const {apiUrl} = this.state
        // axios.get(apiUrl)
        //     .then(res=>{
        //         console.log(res.data);
        //         this.setState({
        //             games: [...res.data.results]
        //         })
        //     })


        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = "https://api-v3.igdb.com/games"; // site that doesn’t send Access-Control-*
        // fetch(proxyurl + url,{
        //     headers: {
        //         "user-key": "e43d1f862600dbac21ab86f17dcec794",
        //         Accept: "application/json"
        //     }
        // }) // https://cors-anywhere.herokuapp.com/https://example.com
        //     .then(response => response.text())
        //     .then(contents => console.log(contents))
        //     .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

}

export default App;
