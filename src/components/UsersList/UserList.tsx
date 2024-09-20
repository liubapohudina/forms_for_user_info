import { fetchUsers, createUsers } from "../../services/api/users";
import React, { useState, useEffect } from "react";
import UserItemForm from "./UserItemForm";
import { UserListTypes, UserListProps } from "./UserList.types";
import css from './UserList.module.css';  

const UserList: React.FC<UserListProps> = ({newUser}) => {
  const [users, setUsers] = useState<UserListTypes[]>([]);

  const addAfter = (userId: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newUser = { id: Date.now(), username: 'name', email: 'email@example.com' };
    const index = users.findIndex(user => user.id === userId);
    
    if (index !== -1) {
      setUsers([...users.slice(0, index + 1), newUser, ...users.slice(index + 1)]);
    }
  };

  const deleteUser = (userId: number) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const saveChanges = async () => {
    try {
      const s = await createUsers(users);
      console.log('Changes saved successfully:', s);
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Failed to save changes.');
    }
  };

  useEffect(() => {
    if (newUser) {
      setUsers([newUser, ...users]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newUser]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <form className={css.userList}>
      {users.map((user) => (
        <UserItemForm key={user.id} user={user}  onAddAfter={addAfter}  onDelete={deleteUser} />
      ))}
       <button className={css.buttonSave} type="button" onClick={saveChanges}>Save Changes</button> 
    </form>
  );
};

export default UserList;
