import { useState } from "react";
import React from "react";
import '../assests/style.css';

const MusicX = () => {
  const [Track, setTrack] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
 
  const getTracks = async () => {
    const data = await fetch(`https://v1.nocodeapi.com/naeemashraf/spotify/klmrutQvXKwspYNP/search?q=${searchQuery}&type=track`);
    const TrackData = await data.json();
    console.log(TrackData.tracks.items)
    setTrack(TrackData.tracks.items);
    
  };

  return (
    <>

      <div className="bg-dark text-success min-vh-100">
        <div className="container py-5">
          {/* <h1 className="text-center mb-4">MusicX</h1> */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a song..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className="btn bg-[#637a5e] text-white" onClick={getTracks}>Search Song</button>
          </div>
          {Track.length > 0 && (
            <div className="row">
              {Track.map((element) => (
                <div key={element.id} className="col-md-4 col-sm-6 mb-4">
                  <div className="card glossy-card h-100">

                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img className="card-img-top" src={element.album.images[0]?.url} alt="Track image" />
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
                        Artist(s): {element.album.artists.map(artist => artist.name).join(", ")} {/* Artist Names */}
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
    </>
  );
};
export default MusicX;
