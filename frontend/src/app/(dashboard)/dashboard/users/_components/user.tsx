import { CalendarCheck2 } from "lucide-react";

import { User as UserType } from "@/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmRoleDialog } from "./confirm-role";

interface UserProps {
  user: UserType;
}

export function User({ user }: UserProps) {
  const isAdmin = user.role === "admin";

  function handleConfirmRole() {
    // todo: fetch to update role and update ui
    console.log(`Role: ${user.id}`);
  }

  return (
    // todo: implement feature to turn user admin or user, think about edit and delete.
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
        <CardAction>
          <Badge variant={isAdmin ? "default" : "secondary"}>
            {isAdmin ? "Admin" : "User"}
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
      <CardFooter>
        <ConfirmRoleDialog
          description={
            isAdmin
              ? "This action can be undone later. This will change the user's role to user in the database."
              : "This action can be undone later. This will change the user's role to administrator in the database."
          }
          onConfirm={handleConfirmRole}
        >
          <Button
            className="w-full"
            variant={isAdmin ? "secondary" : "default"}
          >
            {isAdmin ? "Remove admin" : "Make admin"}
          </Button>
        </ConfirmRoleDialog>
      </CardFooter>
    </Card>
  );
}
