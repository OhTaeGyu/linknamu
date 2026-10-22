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
  name: "김개발",
  bio: "풀스택 개발자, 요즘에는 AI개발에 관심이 많아요",
  avatarUrl: "https://placehold.co/150x150/orange/white",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
