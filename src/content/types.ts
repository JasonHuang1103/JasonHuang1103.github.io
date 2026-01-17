export type LinkLabel =
  | "PDF"
  | "arXiv"
  | "Code"
  | "Project"
  | "DOI"
  | "Website"
  | "Demo"
  | "Email"
  | "GitHub"
  | "Scholar"
  | "CV";

export type Link = {
  label: LinkLabel;
  href: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  kind: "Conference" | "Journal" | "Workshop" | "Preprint";
  links?: Link[];
};

export type Project = {
  name: string;
  status?: "Active" | "Archived";
  description: string;
  tags: string[];
  links?: Link[];
  featured?: boolean;
};

export type Profile = {
  name: string;
  tagline: string;
  affiliation: string;
  location?: string;
  about: string;
  highlights: string[];
  links: Link[];
};
