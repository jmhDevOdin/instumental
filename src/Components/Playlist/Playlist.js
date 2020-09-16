// Soucre: Jonathan Harrison
// React App for creating and adding playlists 
// to Spotify using the Spotify API with tokenisation

import React from 'react';

import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
                <TrackList tracks={this.props.playlistTracks}
                    isRemoval={true}
                    onRemove={this.props.onRemove} />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;


// WEBPACK FOOTER //
// ./src/components/Playlist/Playlist.js