import { FormEvent, FunctionComponent, useState } from "react";
import "./todo.scss";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoProps {
  task: Task;
  delete: (id: number) => void;
  edit: (id: number, text: string) => void;
  toggleCompleted: (id: number) => void;
}

const Todo: FunctionComponent<TodoProps> = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(props.task.text);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.edit(props.task.id, newText);
    setNewText("");
    setEditing(false);
  }

  const editTemplate = (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group form__group--flex">
        <input
          id={props.task.id.toString()}
          type="text"
          className="form__control"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          required
        />
      <button
        title="Cancel"
        type="button"
        className="btn"
        onClick={() => setEditing(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="15" height="15" viewBox="0 0 490 490">
          <path d="M456.851 0 245 212.564 33.149 0 .708 32.337l211.961 212.667L.708 457.678 33.149 490 245 277.443 456.851 490l32.441-32.322-211.961-212.674L489.292 32.337z" />
        </svg>
      </button>
      <button 
        title="Save" 
        type="submit" 
        className="btn btn--primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="15" height="15" viewBox="0 0 490 490">
          <path d="M452.253 28.326 197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z" />
        </svg>
      </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="form__group form__group--flex">
        <input
          id={props.task.id.toString()}
          type="checkbox"
          className="todo__checkbox"
          defaultChecked={props.task.completed}
          onChange={() => props.toggleCompleted(props.task.id)}
        />
        <label className="todo__label" htmlFor={props.task.id.toString()}>
          {props.task.text}
        </label>
        <button
          title="Edit"
          type="button"
          className="btn"
          onClick={() => { setEditing(true) }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
            <path d="M43.125 2c-1.246094 0-2.488281.488281-3.4375 1.4375l-.8125.8125 6.875 6.875.8125-.8125c1.902344-1.902344 1.898438-4.976562 0-6.875C45.609375 2.488281 44.371094 2 43.125 2Zm-5.78125 4.03125c-.226562.03125-.4375.144531-.59375.3125L4.3125 38.8125c-.128906.117188-.226562.269531-.28125.4375l-2 7.5c-.089844.34375.011719.707031.261719.957031.25.25.613281.351563.957031.261719l7.5-2c.167969-.054687.320313-.152344.4375-.28125L43.65625 13.25c.398438-.386719.402344-1.023437.015625-1.421875-.386719-.398437-1.023437-.402344-1.421875-.015625L9.96875 44.09375l-4.0625-4.0625L38.1875 7.75c.300781-.289062.390625-.738281.222656-1.121094-.167968-.382812-.554687-.621093-.972656-.597656h-.09375Z"/>
          </svg>
        </button>
        <button
          title="Delete"
          type="button"
          className="btn btn--danger"
          onClick={() => props.delete(props.task.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="20" height="20" viewBox="0 0 490 490">
            <path d="M102.492 490h285.016c30.132 0 54.641-24.509 54.641-54.625V94.97h32.539V49.033H337.544V0H152.455v49.033H15.313V94.97h32.539v340.404c0 30.117 24.508 54.626 54.64 54.626zm293.719-54.625c0 4.71-3.993 8.688-8.703 8.688H102.492c-4.71 0-8.703-3.978-8.703-8.688V94.97h302.422v340.405z"/>
            <path d="M150.568 171.234h45.938V362.64h-45.938zm79.12 0h45.938V362.64h-45.938zm79.119 0h45.938V362.64h-45.938z"/>
          </svg>
        </button>
    </div>
  );

  return (
    <li className="todo">{isEditing ? editTemplate : viewTemplate}</li>
  )
};

export default Todo;