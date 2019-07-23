import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  margin: 15px 0;
  text-align: center;
  background: #843b62;
  padding: 15px;
  border-radius: 5px;
  color: white;
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2), 1px -1px 0 rgba(0, 0, 0, 0.2),
    -1px 1px 0 rgba(0, 0, 0, 0.2), 1px 1px 0 rgba(0, 0, 0, 0.2);
`;
export default class Cards extends React.Component {
  state = {
    cards: null
  };

  testState = () => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(["test shit"])
    }));
  };

  componentDidMount() {
    axios
      .get("/cards")
      .then(res => {
        this.setState(() => ({ cards: res.data }));
      })
      .catch(err => console.log(err));
  }
  render() {
    let cards = this.state.cards ? (
      this.state.cards.map(card => {
        return <Card key={card.cardId}>{card.body}</Card>;
      })
    ) : (
      <p>Loading content...</p>
    );
    return <div id="cards-container">{cards}</div>;
  }
}
