import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    title: "Failing Tools: Benchmarking LLM Agent Recovery Under Runtime Tool Failures",
    authors: ["Pohao Huang*", "Huanzhi Mao*", "Socrates Osorio", "Jianqi Wang", "Sri Vuddanti", "Yash Agarwal", "Daud Waqas", "Yuxuan Cai"],
    year: 2026,
    venue: "NeurIPS",
    kind: "Conference",
    links: [
      { label: "arXiv", href: "https://openreview.net/attachment?id=NqTg6uzeGS&name=pdf" }
    ]
  },
  {
    title: "DELTA-Code: How Does RL Unlock and Transfer New Programming Algorithms in LLMs?",
    authors: ["Yiyou Sun", "Yuhan Cao", "Pohao Huang", "Haoyue Bai", "Hannaneh Hajishirzi", "Nouha Dziri", "Dawn Song"],
    year: 2025,
    venue: "ICLR",
    kind: "Conference",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2509.21016v2" }
    ]
  },
  {
    title: "MIRAGE-Bench: LLM Agent is Hallucinating and Where to Find Them",
    authors: ["Weichen Zhang", "Yiyou Sun", "Pohao Huang", "Jiayue Pu", "Heyue Lin", "Dawn Song"],
    year: 2025,
    venue: "ICLR",
    kind: "Conference",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2507.21017" }
    ]
  }
];
