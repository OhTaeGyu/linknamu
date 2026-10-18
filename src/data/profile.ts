export type ProfileLink = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl?: string;
  links: ProfileLink[];
};

// 보여 주기용 더미 데이터입니다. 실제 내용은 나중에 채웁니다.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: "/avatar.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
