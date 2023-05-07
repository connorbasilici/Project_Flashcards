import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api/index";

function DeckCard({ deck = {}, index, setDecks }) {
  const handleDeleteDeck = async (e) => {
    if (window.confirm("Delete this deck?")) {
      if (e.target.getAttribute("data-index") === null)
        await deleteDeck(e.target.parentNode.getAttribute("data-index"));
      else await deleteDeck(e.target.getAttribute("data-index"));
    }
    const fetchDecks = async () => setDecks(await listDecks());
    fetchDecks();
  };

  return (
    <div key={index}>
      <div>
        <div>
          <div>
            <h5>{deck.name}</h5>
            <Link to={`/decks/${deck.id}`}>
              <h6>{deck.cards.length} cards</h6>
            </Link>
          </div>
          <p>{deck.description}</p>
          <div>
            <div>
              <Link to={`decks/${deck.id}`}>
                <button>
                  <i /> View
                </button>
              </Link>
              <Link to={`decks/${deck.id}/study`}>
                <button>
                  <i /> Study
                </button>
              </Link>
            </div>
            <button data-index={deck.id} onClick={handleDeleteDeck}>
              <i data-index={deck.id}></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckCard;
