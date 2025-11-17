import { BlockNotImplemented } from "../_components/block-not-implemented";
import BlockTabs from "./_components/block-tabs";

interface BlockPageProps {
  params: Promise<{ block: string }>;
}

// todo: check if user is authenticated
export default async function BlockPage({ params }: BlockPageProps) {
  const { block } = await params;
  // this shows block not implemented if the selected block is not 6. it should call the api but we don't have an endpoint for blocks
  if (!block || block !== "F") return <BlockNotImplemented />;

  // todo: fetch block and finish this page
  // todo: fetch by floor
  return <BlockTabs block={block} />;
}
