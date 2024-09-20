export interface UserListTypes {
  id?: number;
  username: string;
  email: string;
  newUser?: UserListTypes;
}

export interface UserListProps {
  newUser?: UserListTypes;
}