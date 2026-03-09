import type { CategoryKey } from "./categoryMeta";

export type BannerVariant = {
  title: string;
  subtitle: string;
  cta: string;
  accent: CategoryKey;
  rows: CategoryKey[][];
};

export const bannerVariants: BannerVariant[] = [
  {
    title: "New to FLY?",
    subtitle: "See how LiveTime works — create, track, submit.",
    cta: "How it works",
    accent: "technology",
    rows: [
      ["collabs"],
      ["science", "technology"],
      ["business", "photo", "media"],
      ["journalism", "writing", "education", "arts"],
    ],
  },
  {
    title: "What do you need?",
    subtitle: "Pick a category and find the right kind of help.",
    cta: "How it works",
    accent: "business",
    rows: [
      ["business"],
      ["collabs", "pets"],
      ["health", "deliveries", "events"],
      ["rides", "legal", "mechanics", "industrial"],
    ],
  },
  {
    title: "Looking for something specific?",
    subtitle: "Browse categories and narrow in on exactly what you need.",
    cta: "How it works",
    accent: "collabs",
    rows: [
      ["science"],
      ["legal", "journalism"],
      ["business", "technology", "education"],
      ["media", "photo", "collabs", "writing"],
    ],
  },
  {
    title: "Learn how to post a FLY",
    subtitle: "Create one fast, track progress, and submit when it’s done.",
    cta: "How it works",
    accent: "media",
    rows: [
      ["photo"],
      ["arts", "media"],
      ["music", "business", "collabs"],
      ["events", "education", "journalism", "gaming"],
    ],
  },
];
