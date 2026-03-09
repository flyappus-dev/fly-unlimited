import type { CategoryKey } from "./categoryMeta";

export type BannerStackStyle =
  | "fullBlock"
  | "playfulRows"
  | "leftRise";

export type BannerVariant = {
  title: string;
  subtitle: string;
  cta: string;
  accent: CategoryKey;
  rows: CategoryKey[][];
  stackStyle: BannerStackStyle;
  logoAsset?: string;
  logoAlt?: string;
};

export const bannerVariants: BannerVariant[] = [
  {
    title: "Hey, what do you need?",
    subtitle: "",
    cta: "How it works",
    accent: "technology",
    stackStyle: "fullBlock",
    logoAsset: "/logo.png",
    logoAlt: "FLY logo",
    rows: [
      ["business", "collabs", "science", "technology", "media"],
      ["events", "photo", "arts", "health", "writing"],
      ["journalism", "education", "business", "pets", "music"],
      ["rides", "legal", "mechanics", "industrial", "gaming"],
      ["collabs", "business", "science", "media", "photo"],
    ],
  },
  {
    title: "It’s Time to FLY",
    subtitle: "Join in to move fast and make things happen.",
    cta: "How it works",
    accent: "business",
    stackStyle: "playfulRows",
    rows: [
      ["technology", "collabs"],
      ["science", "photo", "media"],
      ["deliveries", "education", "arts", "events"],
    ],
  },
  {
    title: "Looking for something specific?",
    subtitle: "Find just the right kind of whatever it is you need.",
    cta: "How it works",
    accent: "collabs",
    stackStyle: "leftRise",
    rows: [
      ["science"],
      ["legal", "journalism"],
      ["business", "technology", "education"],
      ["media", "photo", "collabs", "writing"],
      ["events", "arts", "music", "health", "rides"],
    ],
  },
];
