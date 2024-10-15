import React, { useState, useEffect } from 'react';
import './style2.css';
import logo from "./musicX.jpg"

const SpotifyApp = () => {
  const [Track, setTrack] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    getRandomTracks();
  }, []);

  const getRandomTracks = async () => {
    try {
      const response = await fetch(`https://v1.nocodeapi.com/naeemashraf/spotify/klmrutQvXKwspYNP/search?q=random&type=track`);
      const TrackData = await response.json();
      if (response.ok) {
        setTrack(TrackData.tracks.items); 
      } else {
        setError(TrackData.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch tracks");
    }
  };


  const getTracks = async () => {
    try {
      const response = await fetch(`https://v1.nocodeapi.com/naeemashraf/spotify/klmrutQvXKwspYNP/search?q=${searchQuery}&type=track`);
      const TrackData = await response.json();
      if (response.ok) {
        setTrack(TrackData.tracks.items); 
      } else {
        setError(TrackData.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch tracks");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getTracks();
  };

  return (
    <div className="spotify-app">


      
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo"><img className='rounded' src={logo} height={"40px"} alt="" /></div>
          <span className='text-[#637a5e] h1'> MusicX</span>
        </div>
 
        {/* <ul className="sidebar-nav">
          <li>
            <i className="fa fa-search"></i>
            <span>Search</span>
          </li>
          <li>
            <i className="fa fa-music"></i>
            <span>Your Library</span>
          </li>
          <li>
            <i className="fa fa-plus"></i>
            <span>Create Playlist</span>
          </li>
          <li>
            <i className="fa fa-heart"></i>
            <span>Liked Songs</span>
          </li>
        </ul> */}
      
      
      
      
      </div>

      <div className="main-content bg-[#637a5e]">
        {/* Search Area - Top Left */}
        <div className="header">

          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search for a song..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
          </form>
        </div>

        {/* Display error if any */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Display random or searched track results */}
        <div className="recommended-items row bg-[#637a5e]">
          {Track.length > 0 && (
            Track.map((element) => (
              <div className="col-md-3 recommended-item bg-dark text-white shadow-lg" key={element.id}>
                <img src={element.album.images[0]?.url} alt={element.name} className="img-fluid" />
                <h3 className="track-title-small">
                  <a href={element.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                    {element.name}
                  </a>
                </h3>
                <p className="artist-name-small">
                  {element.artists.map(artist => artist.name).join(", ")}
                </p>
                {/* Audio Player */}
                <audio controls className="audio-player-small">
                  <source src={element.preview_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyApp;
