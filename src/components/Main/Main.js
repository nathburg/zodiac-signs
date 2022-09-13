import React from 'react';
import { zodiac } from '../../data';
import Sign from '../Sign/Sign';
import './Main.css';
import background from '../../constellations-2609647_1920.jpg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {zodiac.map(({ id, name, dates, symbol }) => (
      <Sign key={id}
        name={name}
        dates={dates}
        symbol={symbol}
      />
    ))}
  </main>;
}