import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-4 py-4 bg-card relative border-t border-border mt-8 flex flex-col items-center gap-3">
      {" "}
            <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} kayliesrithanam.com All rights reserved.
      </p>

    </footer>
  );
};
