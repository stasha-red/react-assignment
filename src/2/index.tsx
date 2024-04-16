import { FunctionComponent, useState, useEffect } from "react";

// Components
import Input from "./components/Search/search";
import List from "./components/List/List";
import { ItemProps } from "./components/Item/Item";

import "./index.scss";

const FETCH_URL = "https://jsonplaceholder.typicode.com/users";

const Task2: FunctionComponent = () => {

  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch(FETCH_URL)
      .then((res) => res.json())
      .then((data) => { 
        data = data.map((user: any) => ({ content: user.name }));
        setUsers(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const filteredUsers = query ? users.filter((item: ItemProps) => item.content.toLowerCase().includes(query.toLowerCase())) : users;
  return (
    <div id="task-2">
      <Input onInputChange={setQuery} />
      <div className="search-result">
        {filteredUsers.length === 0 ? (
          loading ? <p>Loading...</p> : <p>No users found</p> 
        ) : (
          <>
            {query.length > 0 && ( <p>Users found: {filteredUsers.length}</p> )} 
            <List items={filteredUsers}/>
          </>
        )}
      </div>
    </div>
  );
};

export default Task2;
