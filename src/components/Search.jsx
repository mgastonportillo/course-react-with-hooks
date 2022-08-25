import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import "../assets/css/Search.css";

function Search() {
	const [value, setValue] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		let timerId = null;
		if (value) {
			timerId = setTimeout(async () => {
				const { data } = await axios.get(
					"https://en.wikipedia.org/w/api.php",
					{
						params: {
							action: "query",
							list: "search",
							origin: "*",
							format: "json",
							srsearch: value,
						},
					}
				);
				setResults(data.query.search);
			}, 1000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [value]);
	return (
		<React.Fragment>
			<form className="ui icon input">
				<input
					type="text"
					name="search-wiki"
					placeholder="Search Wikipedia..."
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<i className="search icon"></i>
			</form>
			<List results={results} />{" "}
		</React.Fragment>
	);
}

export default Search;
