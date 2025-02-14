import { ClapperboardIcon, HomeIcon, LucideIcon, User } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Recipes App",
  description:
    "Discover millions of recipes from around the world. Explore now.",
  mainNav: [
    {
      title: "Home",
      href: "/"
    }
  ],
  links: {
    github: "https://github.com/Romaleso261981/okten-movie",
    next: "https://nextjs.org",
    netlify: "https://app.netlify.com/",
    tmdb: "https://www.themoviedb.org",
    shadcn: "https://ui.shadcn.com/"
  },
  author: {
    name: "Lesyo Roman",
    web: "https://google.com"
  }
};

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  items?: NavItem[];
};

const home = {
  title: "Home",
  href: "/",
  icon: HomeIcon
};

const login = {
  title: "Login",
  href: "/login",
  icon: User
};

const recipes = {
  title: "Recipes",
  href: "/recipes",
  icon: ClapperboardIcon
};
export const navigation = {
  items: [home, login, recipes] as NavItem[]
};
