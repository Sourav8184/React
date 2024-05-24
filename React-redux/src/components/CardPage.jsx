import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/CardSlice";

function CardPage(props) {
  const dispatch = useDispatch();
  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Img className="img" variant="top" src={props.url} />
      <h3>{props.title}</h3>
      <h2>${props.price}</h2>
      <Button
        onClick={(e) =>
          dispatch(
            addItem({ id: props.id, name: props.title, price: props.price })
          )
        }
        className="btn"
        variant="primary">
        Add to cart
      </Button>
    </Card>
  );
}

export default CardPage;
