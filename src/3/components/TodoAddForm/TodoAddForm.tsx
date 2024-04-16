import { FunctionComponent, useState, FormEvent, ChangeEvent } from "react";

interface TodoAddFormProps {
  addTask: (text: string) => void;
};

const TodoAddForm: FunctionComponent<TodoAddFormProps> = (props) => {
    const [text, setText] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      props.addTask(text);
      setText("");
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setText(event.target.value);
    }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h2>Create task</h2>
        <div className="form__group form__group--flex">
          <input
            type="text"
            className="form__control"
            name="text"
            value={text}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn--primary">
            Add
          </button>
        </div>
      </form>
    );
  };

export default TodoAddForm;