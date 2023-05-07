import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import BreadCrumbNav from "../BreadCrumbNav";

function NewDeck({ decks }) {
  const [newDeckName, setNewDeckName] = useState("");
  const [newDeckDesc, setNewDeckDesc] = useState("");

  const history = useHistory();

  const handleCreateDeck = (e) => {
    e.preventDefault();
    const newDeck = {
      id: decks.length === 0 ? 1 : decks[decks.length - 1].id + 1,
      name: newDeckName,
      description: newDeckDesc,
    };
    createDeck(newDeck);
    history.push(
      `/decks/${decks.length === 0 ? 1 : decks[decks.length - 1].id + 1}`
    );
  };
  const handleNameChange = (e) => setNewDeckName(e.target.value);
  const handleDescChange = (e) => setNewDeckDesc(e.target.value);
  return (
    <>
      <BreadCrumbNav pageName={"Create Deck"} />
      <div>
        <h2>Create Deck</h2>
      </div>
      <form onSubmit={handleCreateDeck}>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            onChange={handleNameChange}
            placeholder="Deck Name"
          ></input>
        </div>
        <div>
          <label>Description</label>
          <textarea
            required
            onChange={handleDescChange}
            placeholder="Brief description of the deck"
          ></textarea>
        </div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewDeck;
