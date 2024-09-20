import css from './ManagePanel.module.css';
import UserList from "../UsersList/UserList";
import React, { useState } from "react";
import { UserListTypes } from "../UsersList/UserList.types";
const ManagePanel = () => {

  const [newUser, setNewUser] = useState<UserListTypes>(); 

  const addUser = () => {
    setNewUser({ username: 'name', email: 'email@example.com' });
  };

  return (
    <section className={css.managePanel}>
      <div className={css.headerBox}>
      <h1 className="hidden">ManagePanel</h1>
      <h3 className={css.title}>Users</h3>
      <button type="button" onClick={addUser} className={css.button}>Add New</button>
      </div>
      <UserList newUser={newUser}/>
    </section>
  )
};

export default ManagePanel;