import { FunctionComponent } from "react";

// Components
import Item, { ItemProps } from "../Item/Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: ItemProps[];
}

const List: FunctionComponent<ListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item key={index} content={item.content} />
      ))}
    </ul>
  );
};

export default List;
