import { useEffect, useMemo, useState } from "react";
import { cs180Content } from "./projects";
import mark from "../../assets/mark.png";

const sanitizeLegacyHtml = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\sonclick="[^"]*"/gi, "");

const assetMap = import.meta.glob("./images/**/*", {
  eager: true,
  query: "?url",
  import: "default"
}) as Record<string, string>;

const rewriteAssetPaths = (html: string) =>
  html.replace(
    /(src|href)=(["'])(\.{1,2}\/images\/[^"']+)\2/g,
    (_match, attr, quote, path) => {
      const normalized = path.startsWith("../images/")
        ? path.replace("../images/", "./images/")
        : path;
      const resolved = assetMap[normalized];
      return `${attr}=${quote}${resolved ?? path}${quote}`;
    }
  );

export default function Cs180App() {
  const [projectId, setProjectId] = useState(
    () => window.location.hash.replace("#", "").trim() || "index"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setProjectId(window.location.hash.replace("#", "").trim() || "index");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const content = useMemo(() => {
    const match =
      cs180Content.find((item) => item.id === projectId) ||
      cs180Content[0];
    const sanitized = sanitizeLegacyHtml(match.html);
    return rewriteAssetPaths(sanitized);
  }, [projectId]);

  return (
    <div className="page cs180-page">
      <nav className="top-nav cs180-nav">
        <div className="nav-inner">
          <a className="logo-button" href="/" aria-label="Back to home">
            <img src={mark} alt="Portfolio mark" />
          </a>
          <div className="cs180-title">CS180</div>
        </div>
      </nav>

      <main className="paper cs180-paper">
        <div
          className="legacy-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </div>
  );
}
