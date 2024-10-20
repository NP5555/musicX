import { useState, useEffect } from "react";
import React from "react";
import './style.css';

const MusicX = () => {
  const [Track, setTrack] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to get mixtape songs on initial render
  const getMixtapeTracks = async () => {
    const data = await fetch(`https://v1.nocodeapi.com/naeemashraf/spotify/klmrutQvXKwspYNP/search?q=remixs&type=track`);
    const TrackData = await data.json();
    setTrack(TrackData.tracks.items);
  };

  // Function to search tracks based on user query
  const getTracks = async () => {
    if (searchQuery.trim() === "") return; // Ensure non-empty search
    const data = await fetch(`https://v1.nocodeapi.com/naeemashraf/spotify/klmrutQvXKwspYNP/search?q=${searchQuery}&type=track`);
    const TrackData = await data.json();
    setTrack(TrackData.tracks.items);
  };

  // Fetch mixtape tracks on component mount
  useEffect(() => {
    getMixtapeTracks();
  }, []);

  return (
    <div className="bg-[#1f2937] text-success min-vh-100">
      <div className="container py-5">
        {/* Centered and shortened search bar */}
        <div className="d-flex rounded-xl justify-content-center mb-4">
          <div className="input-group" style={{ maxWidth: '500px', width: '100%' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a song..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn bg-[#637a5e] rounded-xl text-white" onClick={getTracks}>Search</button>
          </div>
        </div>

        {Track.length > 0 && (
          <div className="row bg-[#1f2937]">
            {Track.map((element) => (
              <div key={element.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card glossy-card h-100">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img className="card-img-top" src={element.album.images[0]?.url} alt="Track" />
                    <a href={element.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="h5 font-weight-bold">
                      <a href={element.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-white">
                        {element.name}
                      </a>
                    </h5>
                    <p className="mb-0">
                      Artist(s): {element.album.artists.map(artist => artist.name).join(", ")}
                    </p>
                    <audio id="music" preload="true" controls className="mt-3 w-100">
                      <source src={element.preview_url} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicX;
