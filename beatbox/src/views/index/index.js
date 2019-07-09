import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css'


class Index extends Component {
    constructor(){
        super();
        this.state={
            song: ""
        }
    }
    render() {
        return (
            <div className="index">
                <div className="card">
                    <div className="card-content">
                        <div className="index-searchBox">

                            <input 
                            type="text" 
                            className="index-searchBox-input" 
                            placeholder="Cancion" 
                            onChange={(e) => {this.setState({song: e.target.value})}} 
                            value={this.state.song} 
                            />
                            <a href="hola" className="waves-effect waves-light btn green">
                            <i className="fa fa-search"></i>
                            </a>
                        
                            </div>
                    </div>
                </div>

                <div className="card index-results-card">
                            <div className="card-content">

                            </div>
                            </div>

            </div>
        );
    }
}

export default Index;