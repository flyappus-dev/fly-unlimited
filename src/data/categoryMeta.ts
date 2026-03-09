export type CategoryKey =
  | "arts"
  | "business"
  | "collabs"
  | "deliveries"
  | "education"
  | "events"
  | "gaming"
  | "health"
  | "industrial"
  | "journalism"
  | "legal"
  | "mechanics"
  | "media"
  | "music"
  | "pets"
  | "photo"
  | "rides"
  | "science"
  | "technology"
  | "writing";

export type CategoryMeta = {
  label: string;
  icon: string;
  color: string;
};

export const categoryMeta: Record<CategoryKey, CategoryMeta> = {
  arts: {
    label: "Arts",
    icon: "/category-icons/Arts.svg",
    color: "#E91E63",
  },
  business: {
    label: "Business",
    icon: "/category-icons/Business.svg",
    color: "#2ECC71",
  },
  collabs: {
    label: "Collabs",
    icon: "/category-icons/Collabs.svg",
    color: "#3498DB",
  },
  deliveries: {
    label: "Deliveries",
    icon: "/category-icons/Deliveries.svg",
    color: "#33B864",
  },
  education: {
    label: "Education + Tutoring",
    icon: "/category-icons/Education.svg",
    color: "#00C3FF",
  },
  events: {
    label: "Events",
    icon: "/category-icons/Events.svg",
    color: "#0054A3",
  },
  gaming: {
    label: "Gaming",
    icon: "/category-icons/Gaming.svg",
    color: "#C62828",
  },
  health: {
    label: "Health",
    icon: "/category-icons/Health.svg",
    color: "#ED0E0E",
  },
  industrial: {
    label: "Engineering + Architecture",
    icon: "/category-icons/Industrial.svg",
    color: "#6E7F80",
  },
  journalism: {
    label: "Journalism",
    icon: "/category-icons/Journalism.svg",
    color: "#16A085",
  },
  legal: {
    label: "Legal Services",
    icon: "/category-icons/Legal.svg",
    color: "#8D3C3C",
  },
  mechanics: {
    label: "Mechanic",
    icon: "/category-icons/Mechanics.svg",
    color: "#868D07",
  },
  media: {
    label: "Media + Entertainment",
    icon: "/category-icons/Media.svg",
    color: "#FF005B",
  },
  music: {
    label: "Music",
    icon: "/category-icons/Music.svg",
    color: "#6600FF",
  },
  pets: {
    label: "For Pets",
    icon: "/category-icons/Pets.svg",
    color: "#20C997",
  },
  photo: {
    label: "Video + Photography",
    icon: "/category-icons/Photo.svg",
    color: "#9B59B6",
  },
  rides: {
    label: "Rides + Transportation",
    icon: "/category-icons/Rides.svg",
    color: "#000000",
  },
  science: {
    label: "Science",
    icon: "/category-icons/Science.svg",
    color: "#2D27FF",
  },
  technology: {
    label: "Tech",
    icon: "/category-icons/Technology.svg",
    color: "#6000E0",
  },
  writing: {
    label: "Writing + Literature",
    icon: "/category-icons/Writing.svg",
    color: "#F5BC02",
  },
};
