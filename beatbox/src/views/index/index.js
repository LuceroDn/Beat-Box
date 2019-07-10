import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import SongItem from './SongItem';
import { checkSignIn, search } from '../../actions';

import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            song: ""
        }
    }

    componentWillMount(){
        this.props.checkSignIn();
    }
    render() {
        const { song } = this.state;
        console.log(this.props);
        return (
            <div className="index background">
                <div className="card #424242 grey darken-3">
                    <div className="card-content">
                        <div className="index-searchBox">

                            <input
                                type="text"
                                className="index-searchBox-input"
                                placeholder="Cancion"
                                onChange={(e) => { this.setState({ song: e.target.value }) }}
                                value={song}
                            />
                            <a href="./" className="waves-effect waves-light btn green"
                                            onClick= {(e) => this.props.search(song)}>
                                <i className="fa fa-search"></i>
                            </a>

                        </div>
                    </div>
                </div>

                <div className="card index-results-card #424242 grey darken-3">
                    <div className="card-content">

                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        routes: state.routes,
        songs: state.player
    }
}

//Se encarga de enviar el action al store
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
checkSignIn,
search
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);