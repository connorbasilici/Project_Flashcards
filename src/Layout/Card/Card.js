import React from "react";
import { Link } from "react-router-dom";

function Card({
  card = { front: "front", back: "back" },
  index,
  handleDeleteCard,
}) {
  return (
    <>
      <div key={index}>
        <div>
          <div>
            <p>{card.front}</p>
            <p>{card.back}</p>
          </div>
          <div>
            <div>
              <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button data-index={card.id} onClick={handleDeleteCard}>
                <i data-index={card.id} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
