import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="searchEngine">
      <form onSubmit={search}>
        <div className="row justify-content-evenly">
          <div className="col">
            <input
              type="search"
              placeholder="Look up any word!"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
