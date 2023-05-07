import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readCard } from "../../utils/api/index";

export default function CardForm({
  onSubmit,
  handleFrontChange,
  handleBackChange,
}) {
  const { deckId, cardId } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    if (cardId) {
      const fetchCard = async () => setCard(await readCard(cardId));
      fetchCard();
    }
  }, [cardId, deckId]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>Front</label>
          <textarea
            type="text"
            required
            onChange={handleFrontChange}
            defaultValue={card.front ? card.front : ""}
            placeholder={"Front side of card"}
          />
        </div>
        <div>
          <label>Back</label>
          <textarea
            type="text"
            required
            onChange={handleBackChange}
            defaultValue={card.back ? card.back : ""}
            placeholder={"Back side of card"}
          />
        </div>
        <Link to={`/decks/${deckId}`}>
          <button>Done</button>
        </Link>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
