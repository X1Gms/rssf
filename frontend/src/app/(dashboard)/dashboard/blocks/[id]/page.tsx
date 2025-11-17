import { redirect } from "next/navigation";

interface BlockPageProps {
  params: Promise<{ id: string }>;
}

// todo: check if user is authenticated
export default async function BlockPage({ params }: BlockPageProps) {
  const { id } = await params;
  if (!id || id !== "6") return redirect("/dashboard/blocks");

  // todo: fetch block and finish this page
  // todo: fetch by floor
  return <p>Block {id}</p>;
}
