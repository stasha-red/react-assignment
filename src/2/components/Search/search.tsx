import { FunctionComponent } from "react";
import "./search.scss";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  onInputChange: (query: string) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <form className="form" action="">
      <label className="form__label" htmlFor="search-control">Search</label>
      <div className="form-search">
        <input 
          id="search-control" 
          className="form__control" 
          type="text" 
          name="q"  
          onChange={(event) => props.onInputChange(event.currentTarget.value)}
          required
          />
        <button className="btn btn--search" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25">
            <path d="M21 3C11.601563 3 4 10.601563 4 20c0 9.398438 7.601563 17 17 17 3.355469 0 6.460938-.984375 9.09375-2.65625L42.375 46.625l4.25-4.25L34.5 30.28125C36.679688 27.421875 38 23.878906 38 20c0-9.398437-7.601562-17-17-17Zm0 4c7.199219 0 13 5.800781 13 13s-5.800781 13-13 13S8 27.199219 8 20 13.800781 7 21 7Z"/>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Input;
