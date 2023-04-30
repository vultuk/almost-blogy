type Link = {
  name: string;
  href: string;
};

export type Config = {
  homepageIsBlog: boolean;
  pages: Link[];
  socials: {
    facebook?: Link;
    twitter?: Link;
    instagram?: Link;
    github?: Link;
    youtube?: Link;
  };
};
