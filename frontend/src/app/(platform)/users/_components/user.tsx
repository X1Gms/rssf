import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";

import { User as UserType } from "@/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserProps {
  user: UserType;
}

export function User({ user }: UserProps) {
  return (
    // todo: implement feature to turn user admin or user, think about edit and delete.
    <Link href={`/users/${user.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
          <CardAction>
            <Badge variant={user.role === "admin" ? "default" : "secondary"}>
              {user.role === "admin" ? "Admin" : "User"}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex items-center text-sm">
          <div className="flex items-center gap-2">
            <CalendarCheck2 className="text-primary size-4" />

            <div className="flex items-center">
              Last access:{" "}
              {user.last_access.toLocaleString("pt-PT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
