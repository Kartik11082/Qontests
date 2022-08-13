import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards.js";

export default function CodeChef(props) {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios
      .get("https://kontests.net/api/v1/codeforces")
      .then((res) => {
        setContests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="length">
        <span>Upcoming Contests {contests.length} </span>
      </div>
      <div className="contests">
        {contests.map((contest) => (
          <Cards
            name={contest.name}
            description={contest.description}
            star_time={contest.start_time}
            end_time={contest.end_time}
          />
        ))}
      </div>
    </>
  );
}
