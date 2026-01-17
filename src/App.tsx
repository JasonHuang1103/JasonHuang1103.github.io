import { useEffect, useMemo, useState } from "react";
import { profile } from "./content/profile";
import { publications } from "./content/publications";
import { projectsBlock } from "./content/projects";
import type { Publication } from "./content/types";
import mark from "./assets/mark.png";
import portrait from "./assets/portrait.jpg";

const sections = [
  { id: "home", label: "Home" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" }
];

const formatAuthors = (authors: string[], highlight: string) =>
  authors.map((author, index) => {
    const isHighlight = author === highlight;
    const separator = index < authors.length - 1 ? ", " : "";

    return (
      <span key={`${author}-${index}`}>
        {isHighlight ? <strong>{author}</strong> : author}
        {separator}
      </span>
    );
  });

const groupByYear = (items: Publication[]) => {
  const grouped = new Map<number, Publication[]>();

  items.forEach((pub) => {
    const yearGroup = grouped.get(pub.year) ?? [];
    yearGroup.push(pub);
    grouped.set(pub.year, yearGroup);
  });

  return Array.from(grouped.entries()).sort((a, b) => b[0] - a[0]);
};

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [filter, setFilter] = useState<"All" | Publication["kind"]>("All");
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const kinds = useMemo(() => {
    const set = new Set(publications.map((pub) => pub.kind));
    return ["All", ...Array.from(set)] as const;
  }, []);

  const filteredPublications = useMemo(
    () =>
      filter === "All"
        ? publications
        : publications.filter((pub) => pub.kind === filter),
    [filter]
  );

  const groupedPublications = useMemo(
    () => groupByYear(filteredPublications),
    [filteredPublications]
  );

  const emailLink = useMemo(
    () => profile.links.find((link) => link.label === "Email"),
    [profile.links]
  );

  const otherLinks = useMemo(
    () => profile.links.filter((link) => link.label !== "Email"),
    [profile.links]
  );

  const emailText =
    emailLink?.href.replace(/^mailto:/, "") ??
    "jasonhuang1103@berkeley.edu";
  const emailDisplay = emailCopied ? "copied" : emailText;

  return (
    <div className="page">
      <nav className="top-nav">
        <div className="nav-inner">
          <a
            className="logo-button"
            href="#home"
            onClick={() => setActiveSection("home")}
            aria-label="Go to home section"
          >
            <img src={mark} alt="Portfolio mark" />
          </a>
          <div className="nav-links">
            {sections.map((section) => (
              <a
                key={section.id}
                className={
                  activeSection === section.id ? "nav-link active" : "nav-link"
                }
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="paper">
        <section className="section hero" id="home">
          <div className="hero-top">
            <div className="hero-text">
              <h1>{profile.name}</h1>
              <p className="hero-tagline">{profile.tagline}</p>
              <p className="hero-affiliation">
                {profile.affiliation}
                {profile.location ? ` - ${profile.location}` : ""}
              </p>
            </div>
            <div className="hero-portrait">
              <img src={portrait} alt="Portrait" />
            </div>
          </div>
          <div className="hero-links">
            {emailLink ? (
              <button
                type="button"
                className={`link-chip email-chip${emailCopied ? " copied" : ""}`}
                onClick={() => {
                  navigator.clipboard?.writeText(emailText);
                  setEmailCopied(true);
                  window.setTimeout(() => setEmailCopied(false), 500);
                }}
                aria-label={`Copy email address ${emailText}`}
              >
                <span className="email-label">Email</span>
                <span
                  className="email-value"
                  style={{ minWidth: `${emailText.length}ch` }}
                  aria-live="polite"
                >
                  {emailDisplay}
                </span>
              </button>
            ) : null}
            {otherLinks.map((link) => (
              <a key={link.label} className="link-chip" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="about-card">
            <h2>About</h2>
            <p>{profile.about}</p>
          </div>
          <div className="pill-row">
            {profile.highlights.map((highlight) => (
              <span key={highlight} className="pill">
                {highlight}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <div className="section-header">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2>Publications</h2>
            </div>
            <div className="filters">
              {kinds.map((kind) => (
                <button
                  key={kind}
                  type="button"
                  className={kind === filter ? "filter active" : "filter"}
                  onClick={() => setFilter(kind)}
                >
                  {kind}
                </button>
              ))}
            </div>
          </div>

          <div className="publication-groups">
            {groupedPublications.map(([year, items]) => (
              <div key={year} className="year-block">
                <span className="year">{year}</span>
                <div className="card-grid">
                  {items.map((pub) => (
                    <article key={pub.title} className="card">
                      <div className="card-meta">
                        <span className="tag">{pub.kind}</span>
                        <span className="venue">
                          {pub.venue} • {pub.year}
                        </span>
                      </div>
                      <h3>{pub.title}</h3>
                      <p className="authors">
                        {formatAuthors(pub.authors, profile.name)}
                      </p>
                      <div className="link-row">
                        {pub.links?.map((link) => (
                          <a key={link.label} href={link.href}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <div>
              <p className="section-kicker">Systems + Demos</p>
              <h2>{projectsBlock.title}</h2>
            </div>
          </div>

          {projectsBlock.sections.map((section) => (
            <div key={section.title} className="legacy-block">
              <a className="legacy-header" href={section.href}>
                {section.title}
              </a>
              <div className="legacy-links">
                {section.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
