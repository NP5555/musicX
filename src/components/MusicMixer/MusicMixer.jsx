import React, { useState } from 'react';
import { Knob } from 'rc-knob';
import './playerstyle.css'; // Custom CSS file for styling

const MusicMixer = () => {
  // State variables for knobs
  const [drumsEQ, setDrumsEQ] = useState({ high: 50, mid: 50, low: 50 });
  const [guitarEQ, setGuitarEQ] = useState({ high: 50, mid: 50, low: 50 });
  const [vocalsEQ, setVocalsEQ] = useState({ high: 50, mid: 50, low: 50 });

  // Functions to update knob values
  const handleKnobChange = (instrument, type, value) => {
    if (instrument === 'drums') {
      setDrumsEQ((prev) => ({ ...prev, [type]: value }));
    } else if (instrument === 'guitar') {
      setGuitarEQ((prev) => ({ ...prev, [type]: value }));
    } else if (instrument === 'vocals') {
      setVocalsEQ((prev) => ({ ...prev, [type]: value }));
    }
  };

  return (
    <div className="music-mixer">
      <div className="mixer-sections">
        {/* Drums/Percussion Section */}
        <div className="mixer-section">
          <h2>Drums & Percussion</h2>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={drumsEQ.high}
              onChange={(value) => handleKnobChange('drums', 'high', value)}
            />
            <span>High</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={drumsEQ.mid}
              onChange={(value) => handleKnobChange('drums', 'mid', value)}
            />
            <span>Mid</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={drumsEQ.low}
              onChange={(value) => handleKnobChange('drums', 'low', value)}
            />
            <span>Low</span>
          </div>
        </div>

        {/* Guitar/Piano Section */}
        <div className="mixer-section">
          <h2>Guitar/Piano</h2>
          <div className="knob-container bg-white">
           
            <Knob
              size={90}
              min={0}
              max={100}
              className="bg-slate-500"
              value={guitarEQ.high}
              onChange={(value) => handleKnobChange('guitar', 'high', value)}
            />

            <span>High</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={guitarEQ.mid}
              onChange={(value) => handleKnobChange('guitar', 'mid', value)}
            />
            <span>Mid</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={guitarEQ.low}
              onChange={(value) => handleKnobChange('guitar', 'low', value)}
            />
            <span>Low</span>
          </div>
        </div>

        {/* Vocals Section */}
        <div className="mixer-section">
          <h2>Vocals</h2>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={vocalsEQ.high}
              onChange={(value) => handleKnobChange('vocals', 'high', value)}
            />
            <span>High</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={vocalsEQ.mid}
              onChange={(value) => handleKnobChange('vocals', 'mid', value)}
            />
            <span>Mid</span>
          </div>
          <div className="knob-container">
            <Knob
              size={70}
              min={0}
              max={100}
              value={vocalsEQ.low}
              onChange={(value) => handleKnobChange('vocals', 'low', value)}
            />
            <span>Low</span>
          </div>
        </div>
      </div>

      {/* Volume and Master Controls */}
      <div className="volume-controls">
        <button className="volume-btn">Volume Down</button>
        <button className="volume-btn">Volume Up</button>
        <div className="master-control  bg-white h-[93px] w-[34px]">
          <h3>Master</h3>
          <input type="range" min="0" max="100" className="master-slider " />
        </div>
      </div>



    </div>
  );
};

export default MusicMixer;
