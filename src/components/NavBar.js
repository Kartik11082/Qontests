import { Link } from "react-router-dom";
import "./NavBar.css";


export default function NavBar() {
	return (
		<>
		<div className="navigation">
			<Link to="/" className="link">All</Link>
			<Link to="/leetcode" className="link">LeetCode</Link>
			<Link to="/codechef" className="link">CodeChef</Link>
			<Link to="/codeforces" className="link">CodeForces</Link>
		</div>
		</>
	);	
}
