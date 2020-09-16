// Soucre: Jonathan Harrison
// React App for creating and adding playlists 
// to Spotify using the Spotify API with tokenisation

import React from 'react';

import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResults;


// WEBPACK FOOTER //
// ./src/components/SearchResults/SearchResults.js