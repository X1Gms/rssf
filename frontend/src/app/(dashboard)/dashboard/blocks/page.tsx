import { Block as BlockType } from "@/types";

import { BlocksWithSearch } from "@/app/_components/blocks-with-search";

const BLOCKS: BlockType[] = [
  {
    id: 1,
    name: "A",
    school: "ESTS",
  },
  {
    id: 2,
    name: "B",
    school: "ESTS",
  },
  {
    id: 3,
    name: "C",
    school: "ESTS",
  },
  {
    id: 4,
    name: "D",
    school: "ESTS",
  },
  {
    id: 5,
    name: "E",
    school: "ESTS",
  },
  {
    id: 6,
    name: "F",
    school: "ESTS",
  },
];

export default function BlocksPage() {
  return <BlocksWithSearch blocks={BLOCKS} />;
}
