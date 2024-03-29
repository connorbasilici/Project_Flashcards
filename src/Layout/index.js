import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Header from "./Header";
import Home from "./Home";
import Deck from "./Deck/Deck";
import NewDeck from "./Deck/NewDeck";
import EditCard from "./Card/EditCard";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => setDecks(await listDecks());
    fetchDecks();
  }, []);

  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Home decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/new">
            <NewDeck decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/:deckId">
            <Deck decks={decks} />
          </Route>
          <Route>
            {" "}
            {/* 404 */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
