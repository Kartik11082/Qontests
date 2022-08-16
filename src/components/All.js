import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards.js";

export default function Leetcode(props) {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
	  setLoading(true);
	  axios
	  .get("https://kontests.net/api/v1/all")
      .then((res) => {
        setContests(res.data);
		setLoading(false);
      })
      .catch((err) => {
        console.log(err);
		setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="length">
        <span>Upcoming Contests: {loading ? "Fetching Data" : contests.length} </span>
      </div>
      <div className="contests">
	  { loading && <div className="loading"> </div> }
        {contests.map((contest) => (
          <Cards
            name={contest.name}
            description={contest.description}
            star_time={contest.start_time}
            end_time={contest.end_time}
            url={contest.url}
          />
        ))}
      </div>
    </>
  );
}
