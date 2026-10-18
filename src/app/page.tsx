import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ThemeToggle />
      <main className="mx-auto flex w-full max-w-md flex-col gap-8 px-4 pb-16 pt-20">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />
        <ul className="flex flex-col gap-3">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
