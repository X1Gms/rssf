import { ToggleTheme } from "./toogle-theme";

export function Footer() {
  return (
    <footer className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky bottom-0 z-50 flex h-14 items-center border-t px-6 backdrop-blur">
      <div className="container flex justify-end">
        <ToggleTheme />
      </div>
    </footer>
  );
}
