import React from 'react';
import { withRouter } from 'react-router';

const ItemDetail = ({ item }) => (
  <div className="item">
    <h4>{item.name}</h4>
    <h5>Happiness: {item.happiness}</h5>
    <h5>Price: {item.price}</h5>
  </div>
);

export default withRouter(ItemDetail);
