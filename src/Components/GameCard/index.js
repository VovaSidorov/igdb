import React, {Component} from 'react';
import {Link} from "react-router-dom";


class GameCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowText:false
        }
    }
    render(){
        const {id,name,summary,screenshots} = this.props;
        const img=screenshots[0].image_id;
        const urlImage1 = "https://images.igdb.com/igdb/image/upload/t_cover_big/"+img+".jpg";
        return (
            <div className="card col-6 mt-5">
                <img src= {urlImage1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{this.state.isShowText?summary:this.sliceText(summary)}</p>
                    <Link to={`/game/${id}`} className="btn btn-primary stretched-link mr-2">
                        More
                    </Link>
                    <button className="btn btn-primary" onChange={this.handlerClick}>
                        {this.state.isShowText?"Hide":"Show More"}
                    </button>
                </div>

            </div>
        );

    }
    handlerClick=()=> {
        console.log('sdfsdfsdfsdfsd');
        this.setState({
            isShowText:!this.state.isShowText
        })
    };
    sliceText=(text)=> {
        return text.slice(0,30)+"...";
    }
}




export default GameCard;