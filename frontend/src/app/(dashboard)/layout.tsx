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

      <div className="flex flex-col p-6">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
