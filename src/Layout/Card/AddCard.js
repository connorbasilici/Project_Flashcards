import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import BreadCrumbNav from "../BreadCrumbNav";
import CardForm from "./CardForm";

function AddCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const history = useHistory();

  const handleAddCard = (e) => {
    e.preventDefault();
    const newCard = {
      front: front,
      back: back,
      deckId: deckId,
      id: cardId,
    };
    createCard(deckId, newCard);

    const fetchDeck = async () => setDeck(await readDeck(deckId));
    fetchDeck();
    history.push(`/decks/${deckId}`);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDeck = async () =>
      setDeck(await readDeck(deckId, abortController.signal));
    fetchDeck();
    return () => abortController.abort();
  }, [deckId, history]);

  const handleFrontChange = (e) => setFront(e.target.value);
  const handleBackChange = (e) => setBack(e.target.value);
  return (
    <>
      <BreadCrumbNav
        link={`/decks/${deck.id}`}
        linkName={deck.name}
        pageName={"Add Card"}
      />
      <div>
        <h3>{deck.name}:</h3>
        <h3>Add Card</h3>
      </div>
      <CardForm
        onSubmit={handleAddCard}
        handleFrontChange={handleFrontChange}
        handleBackChange={handleBackChange}
      />
    </>
  );
}

export default AddCard;
