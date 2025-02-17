import React from "react";
import Link from "next/link";

import s from "./usersList.module.css";
import { User } from "@/utils/types";

type UsersListProps = {
  users: User[];
};

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={s.list}>
      {users.map(user =>
        <li className={s.item} key={user.id}>
          <Link href={`/users/${user.id}`}>
            <div className={s.content}>
              <p className={s.title}>
                {user.firstName} {user.lastName}
              </p>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
};
