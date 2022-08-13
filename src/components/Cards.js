import "./Cards.css";

export default function Cards(props) {
  const startTime = new Date(props.star_time).toLocaleString();
  const endTime = new Date(props.end_time).toLocaleString();

  return (
    <div className="contest">
      <a href={props.url} target="_blank" rel="noreferrer">
        <h2>{props.name}</h2>
        <span>{props.description}</span>
        <p>
          Start Time: <b>{startTime}</b>
        </p>
        <p>
          End Time: <b>{endTime}</b>
        </p>
      </a>
    </div>
  );
}
