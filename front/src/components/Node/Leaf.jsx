import {ListGroupItem} from "react-bootstrap";

export const Leaf = ({id, name, price}) => {
  const level = {
    paddingLeft: `30px`,
    border: 'none'}
  return (
      <ListGroupItem style={level} key={`leaf-${id}`}>Product: {name} (price: ${price}) </ListGroupItem>
  );
}
