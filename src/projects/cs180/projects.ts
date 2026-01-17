import indexHtml from "./content/index.html?raw";
import project1Html from "./content/project1.html?raw";
import project2Html from "./content/project2.html?raw";
import project3Html from "./content/project3.html?raw";
import project4Html from "./content/project4.html?raw";
import project5Html from "./content/project5.html?raw";
import project6Html from "./content/project6.html?raw";

type ProjectContent = {
  id: string;
  html: string;
};

export const cs180Content: ProjectContent[] = [
  { id: "index", html: indexHtml },
  { id: "project1", html: project1Html },
  { id: "project2", html: project2Html },
  { id: "project3", html: project3Html },
  { id: "project4", html: project4Html },
  { id: "project5", html: project5Html },
  { id: "project6", html: project6Html }
];
