import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';


class SongItem extends Component {
    render(){
        return(
            <div>
                SongItem
            </div>
        )
    }
}

SongItem.propTypes = {
    songId: PropTypes.string,
    tokenPath: PropTypes.string,
    albumPhoto: PropTypes.string,
    songName: PropTypes.string,
    artistName: PropTypes.string
}

export default SongItem;