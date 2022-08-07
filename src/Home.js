import axios from "axios";

export default function Home(props) {

	console.log(props.site);
	
	let urlAddress = "https://kontests.net/api/v1/all";
	// axios.get(urlAddress)

	return (
		<>
			<h1>{props.site} Page</h1>
		</>
	);
}
