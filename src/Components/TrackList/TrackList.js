// Soucre: Jonathan Harrison
// React App for creating and adding playlists 
// to Spotify using the Spotify API with tokenisation

import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                            key={track.id}
                            onAdd={this.props.onAdd}
                            isRemoval={this.props.isRemoval}
                            onRemove={this.props.onRemove} />
                    })
                }
            </div>
        );
    }
}

export default TrackList;


// WEBPACK FOOTER //
// ./src/components/TrackList/TrackList.js