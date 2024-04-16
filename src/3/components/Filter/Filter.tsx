import { FunctionComponent } from "react";

export interface FilterProps {
  name: string;
  isPressed: boolean;
  setFilter: (name: string) => void;
}

const Filter: FunctionComponent<FilterProps> = (props) => {
  return (
    <button 
      type="button" 
      className="btn btn--filter" 
      onClick={() => props.setFilter(props.name)}
      aria-pressed={props.isPressed}
    >
      {props.name}
    </button>
  );
}

export default Filter;