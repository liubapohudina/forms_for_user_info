import React from 'react';
import { useForm } from 'react-hook-form';
import { UserItemFormProps } from './UserItemForm.types';
import css from './UserItemForm.module.css';


const UserItemForm: React.FC<UserItemFormProps> = ({ user, onAddAfter, onDelete }) => {
  const { register } = useForm();

  return (
    <div key={user.id} className={css.user}>
      <div className={css.inputBox}>
        <input
          {...register(`users.${user.id}.name` as const)}
          defaultValue={user.username}
          type="text"
        />
      </div>
      <div className={css.inputBox}>
        <input
          {...register(`users.${user.id}.email` as const)}
          defaultValue={user.email}
          type="email"
        />
      </div>
      <button className={css.buttonAdd} onClick={(e) => user.id && onAddAfter(user.id, e)}>Add after</button>
      <button className={css.buttonDelete} onClick={() => user.id && onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserItemForm;

