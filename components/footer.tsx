import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <p className="text-sm text-neutral-600">Built by Hemanta Sundaray</p>
        <a
          href="https://github.com/sundaray/hemanta-blog"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          className="text-muted-foreground focus-ring hover:text-foreground rounded-md p-2 transition-colors"
        >
          <FaGithub className="size-5" />
        </a>
      </div>
    </footer>
  );
}
