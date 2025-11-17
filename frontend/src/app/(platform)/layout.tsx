export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col p-6">
      <div className="container">{children}</div>
    </div>
  );
}
