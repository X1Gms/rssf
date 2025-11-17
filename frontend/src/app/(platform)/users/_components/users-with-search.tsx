"use client";

import { useState, useMemo } from "react";

import { User as UserType } from "@/types";

import { User } from "./user";
import { SearchUser } from "./search-user";

interface UsersWithSearchProps {
  users: UserType[];
}

export function UsersWithSearch({ users }: UsersWithSearchProps) {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    const q = query.toLowerCase();

    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q),
    );
  }, [users, query]);

  return (
    <div className="flex flex-col gap-4">
      <SearchUser
        value={query}
        onChange={setQuery}
        totalResults={filteredUsers.length}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
