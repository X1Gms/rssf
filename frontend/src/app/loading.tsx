import { Spinner } from "@/components/ui/spinner";

export default async function Loading() {
  return (
    <div className="absolute inset-0 z-99 flex min-h-screen flex-col items-center justify-center">
      <Spinner className="text-primary mr-0 size-6" show />
    </div>
  );
}
