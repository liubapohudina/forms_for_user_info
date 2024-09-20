import { UserListTypes } from "../UserList.types";
export interface UserItemFormProps {
  user: UserListTypes;
  onAddAfter: (userId: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (userId: number) => void;
}