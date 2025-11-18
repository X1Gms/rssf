import { User as UserType } from "@/types";

import { UsersWithSearch } from "./_components/users-with-search";

const USERS: UserType[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    last_access: new Date("2025-11-14T09:32:00Z"),
  },
  {
    id: 2,
    name: "Sofia Davis",
    email: "sofia.davisexample.com",
    role: "user",
    last_access: new Date("2025-10-21T14:18:00Z"),
  },
  {
    id: 3,
    name: "Madeline Valdez",
    email: "madeline.valdez@example.com",
    role: "admin",
    last_access: new Date("2025-11-01T08:45:00Z"),
  },
  {
    id: 4,
    name: "Algernon Castro",
    email: "algernon.castro@example.com",
    role: "user",
    last_access: new Date("2025-09-30T16:20:00Z"),
  },
  {
    id: 5,
    name: "Josh Hunter",
    email: "josh.hunter@example.com",
    role: "user",
    last_access: new Date("2025-11-10T11:05:00Z"),
  },
  {
    id: 6,
    name: "Miranda Hayward",
    email: "miranda.hayward@example.com",
    role: "admin",
    last_access: new Date("2025-10-15T13:50:00Z"),
  },
];

// todo: make sure that only unauthenticated users can access this page
export default function UsersPage() {
  // todo: fetch users
  return <UsersWithSearch users={USERS} />;
}
