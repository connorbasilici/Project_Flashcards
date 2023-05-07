import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";
import BreadCrumbNav from "../BreadCrumbNav";

function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState("");
  const [deckName, setDeckName] = useState("");
  const [deckDescrip, setDeckDescrip] = useState("");
  const [changed, setChanged] = useState(false);

  const history = useHistory();

  const handleEditDeck = (e) => {
    e.preventDefault();
    if (changed) {
      const updatedDeck = {
        name: deckName,
        description: deckDescrip,
        id: deckId,
      };
      updateDeck(updatedDeck);
      setChanged((bool) => (bool = false));
    }
    history.push(`/decks/${deckId}`);
  };

  useEffect(() => {
    const fetchDeck = async () => setDeck(await readDeck(deckId));
    fetchDeck();
  }, [deckId]);

  const handleNameChange = (e) => {
    setDeckName(e.target.value);
    setChanged((bool) => (bool = true));
  };
  const handleDescripChange = (e) => {
    setDeckDescrip(e.target.value);
    setChanged((bool) => (bool = true));
  };
  return (
    <>
      <BreadCrumbNav
        link={`/decks/${deck.id}`}
        linkName={deck.name}
        pageName={"Edit Deck"}
      />
      <div>
        <h2>Edit Deck</h2>
      </div>
      <form onSubmit={handleEditDeck}>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            defaultValue={deck.name}
            onLoad={handleNameChange}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            required
            defaultValue={deck.description}
            onLoad={handleDescripChange}
            onChange={handleDescripChange}
          />
        </div>
        <Link to={`/decks/${deckId}`}>
          <button>Cancel</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditDeck;
