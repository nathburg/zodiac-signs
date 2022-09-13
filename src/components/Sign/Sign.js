import './Sign.css';

export default function Sign({ id, name, dates, symbol }) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/signs/${name}.png`}></img>
    </div> 
  );
}