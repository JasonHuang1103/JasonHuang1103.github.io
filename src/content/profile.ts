import type { Profile } from "./types";

export const profile: Profile = {
  name: "Jason Huang",
  tagline: "Graduate Researcher focused on reliable AI agents and multi-modal learning.",
  affiliation: "University of California, Berkeley",
  location: "Berkeley, CA",
  about:
    "I'm a recent computer science graduate from UC Berkeley, currently working in Sky Computing Lab. My current research focuses on multimodal context modeling and memory augmentation. My recent work explores cross-modal reasoning capabilities of omnimodal agents and analyzes failure modes of LLM agents in complex tool-usage settings.",
  highlights: ["Mulimodality", "Memory Augmentation", "Hallucination and Failure Modes", "Tool-Calling Benchmarks"],
  links: [
    { label: "Email", href: "mailto:jasonhuang1103@berkeley.edu" },
    { label: "GitHub", href: "https://github.com/JasonHuang1103" }
  ]
};
