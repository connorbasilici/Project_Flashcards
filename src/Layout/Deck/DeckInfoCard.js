import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbNav from "../BreadCrumbNav";

function DeckInfoCard({ deck, deckId, handleDeleteDeck }) {
  return (
    <>
      <BreadCrumbNav pageName={deck.name} />
      <div>
        <div>
          <div>
            <div>
              <h4>{deck.name}</h4>
            </div>
            <p>{deck.description}</p>

            <div>
              <div>
                <Link to={`/decks/${deckId}/edit`}>
                  <button>
                    <i /> Edit
                  </button>
                </Link>

                <Link to={`/decks/${deckId}/study`}>
                  <button>
                    <i /> Study
                  </button>
                </Link>

                <Link to={`/decks/${deckId}/cards/new`}>
                  <button>
                    <i /> Add Card
                  </button>
                </Link>
              </div>

              {/* Clicking the Delete button shows a warning message before deleting the deck */}
              <button data-index={deckId} onClick={handleDeleteDeck}>
                <i /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeckInfoCard;
