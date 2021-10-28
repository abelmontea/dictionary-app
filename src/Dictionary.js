import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
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
  );
}
