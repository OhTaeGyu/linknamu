type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          className="h-24 w-24 rounded-full object-cover"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
