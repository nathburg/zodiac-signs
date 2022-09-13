import React from 'react';
import { zodiac } from '../../data';
import Sign from '../Sign/Sign';
import './Main.css';

export default function Main() {
  return <main>
    {zodiac.map(({ id, name, dates, symbol }) => (
      <Sign key={id}
        name={name}
        dates={dates}
        symbol={symbol}
      />
    ))}
  </main>;
}