import {ListGroupItem} from "react-bootstrap";
import {Leaf} from "./Leaf.jsx";
import {useState} from "react";
import {FaAngleDown, FaAngleRight, FaRegFolder, FaRegFolderOpen} from "react-icons/all.js";

export const Branch = ({id, name, children=[], products = []}) => {
  const padding = {
    paddingLeft: `15px`,
    border: 'none'}
  const childList = children.map(Branch)
  const productList = products.map(Leaf)
  return (
      <ListGroupItem
        key={`branch-${id}`}
        style={padding}>

        <FaAngleDown/>
        <FaRegFolderOpen/> {name}
        {productList}
        {childList}

      </ListGroupItem>



  );
}
