import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";

export function Welcome() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome to smartIPS</CardTitle>
        <CardDescription>
          smartIPS is an innovative interface for the IoT and LoRa network of
          the Polytechnic Institute of Setúbal.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 md:grid-cols-2">
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>

        <Button asChild>
          <Link href="/signup">Signup</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
