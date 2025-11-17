import { Header } from "@/components/header";
import { NavBar } from "@/components/navbar";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <NavBar />

      <div className="flex flex-1 flex-col p-6">
        <div className="container flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}
