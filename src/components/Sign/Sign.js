import './Sign.css';

export default function Sign({ name, dates, symbol }) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/signs/${name}.png`}></img>
      <div>{name.toUpperCase()}</div>
      <div>{dates}</div>
      <div>{symbol}</div>
    </div> 
  );
}