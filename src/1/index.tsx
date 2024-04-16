// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form className="form" onSubmit={onSubmit}>
        <div className="form__group">
          <label htmlFor="task1-email" className="form__label">
            Email
            <span className="form__asterisk">*</span>
          </label>
          <input
            id="task1-email"
            name="email"
            type="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            className="form__control"
            value={email}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="task1-password" className="form__label">
            Password
            <span  className="form__asterisk">*</span>
          </label>
          <input
            id="task1-password"
            className="form__control"
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
          />
        </div>
        <button className="btn btn--primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Task1;
