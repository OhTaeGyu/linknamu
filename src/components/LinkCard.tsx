import type { ProfileLink } from "@/data/profile";

type LinkCardProps = {
  link: ProfileLink;
};

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      {link.title}
    </a>
  );
}
