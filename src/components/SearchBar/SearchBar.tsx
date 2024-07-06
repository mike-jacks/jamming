import { useState } from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(searchField);
    setSearchField("");
  }

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} className={styles["search-field-container"]}>
        <label htmlFor="search-field">Song Title Search</label>
        <input id="search-field" value={searchField} onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
