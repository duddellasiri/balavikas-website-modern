import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./styles.css";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const values = [
  "Compassionate service",
  "Ethical leadership",
  "Cultural curiosity",
  "Respect for all traditions",
];

const programs = [
  {
    icon: BookOpen,
    title: "Sunday School",
    text: "Weekly values-based classes for children and parents, with stories, discussion, culture, and leadership development.",
  },
  {
    icon: HandHeart,
    title: "Viveksena",
    text: "Youth service activities across the Washington, DC suburbs, including food service, companionship, supplies, and community support.",
  },
  {
    icon: GraduationCap,
    title: "Education Initiatives",
    text: "Support for students through projects that expand learning access, coaching, and preparation for higher education.",
  },
];

const projects = [
  "PROCEED Project: a Balavikas education initiative supporting talented students with limited resources.",
  "Virtual Classroom Project: implemented with Ramakrishna Mission, Visakhapatnam, Andhra Pradesh, India.",
  "Local outreach: service activities supporting shelters, nursing homes, medicine sorting, and eyeglass preparation.",
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Balavikas home">
          <img src={assetPath("balavikas-logo.png")} alt="" />
          <span>
            <strong>Balavikas</strong>
            <small>of Fairfax</small>
          </span>
        </a>
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#donate" onClick={() => setMenuOpen(false)}>
            Donate
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">IRS recognized 501(c)(3) organization</p>
          <h1>Rooted in values. Growing through service.</h1>
          <p>
            Balavikas brings values education, service, and culture to children and families,
            helping young people grow into compassionate, capable, and open-minded adults.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#programs">
              Explore programs <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Join a Sunday class
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Balavikas inspiration portraits">
          <img
            className="portrait main"
            src={assetPath("vivekananda.jpg")}
            alt="Swami Vivekananda"
          />
          <img
            className="portrait offset top"
            src={assetPath("ramakrishna.jpg")}
            alt="Sri Ramakrishna"
          />
          <img
            className="portrait offset bottom"
            src={assetPath("sarada-devi.jpg")}
            alt="Sarada Devi"
          />
          <div className="stat">
            <strong>Since 1989</strong>
            <span>Serving families across Northern Virginia</span>
          </div>
        </div>
      </section>

      <section id="mission" className="section mission-band">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Helping children build character through reflection, culture, and service.</h2>
        </div>
        <div className="mission-content">
          <p>
            Balavikas draws from the teachings and examples of Swami Vivekananda, Sri Ramakrishna,
            Sarada Devi, and great thinkers across cultures. Children are encouraged to develop
            sound judgment, respect for others, and a lifelong habit of learning from every source
            of goodness.
          </p>
          <div className="value-grid">
            {values.map((value) => (
              <span key={value}>
                <CheckCircle2 size={18} /> {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section">
        <div className="section-heading">
          <p className="eyebrow">Programs</p>
          <h2>Practical learning for children and families.</h2>
        </div>
        <div className="program-grid">
          {programs.map(({ icon: Icon, title, text }) => (
            <article className="program-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Sunday School</p>
          <h2>No formal registration. No fee. Start any Sunday.</h2>
        </div>
        <div className="detail-list">
          <div>
            <CalendarDays size={22} />
            <span>
              <strong>Sundays, 4:00 PM to 5:30 PM</strong>
              <small>Classes are currently listed at Chandrika Pisupati's home.</small>
            </span>
          </div>
          <div>
            <Users size={22} />
            <span>
              <strong>Mixed age groups welcome</strong>
              <small>Children from preschool through high school have participated.</small>
            </span>
          </div>
          <div>
            <Sparkles size={22} />
            <span>
              <strong>Discussion-led curriculum</strong>
              <small>History, culture, leadership, responsibility, stories, and dialogue.</small>
            </span>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-band">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Service that reaches local communities and students abroad.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project}>
              <HeartHandshake size={24} />
              <p>{project}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="section events">
        <div>
          <p className="eyebrow">Events</p>
          <h2>Youth Day Competitions 2026</h2>
          <p>
            Join Balavikas on July 11, 2026 at Vintage Park Plaza, 45365 Vintage Park Plaza,
            Sterling, VA 20166.
          </p>
        </div>
        <a
          className="event-card"
          href="https://www.balavikas.org/youth.asp"
          target="_blank"
          rel="noreferrer"
        >
          <CalendarDays size={28} />
          <strong>View event details</strong>
          <span>July 11, 2026 in Sterling, Virginia</span>
        </a>
      </section>

      <section id="donate" className="section donate-band">
        <div>
          <p className="eyebrow">Donations</p>
          <h2>Support Balavikas programs and service projects.</h2>
          <p>
            Donations may be made by check mailed to Balavikas, 20416 Oyster Reef Pl., Ashburn VA
            20147.
          </p>
        </div>
        <a
          className="button primary"
          href="https://www.balavikas.org"
          target="_blank"
          rel="noreferrer"
        >
          Donation info <ArrowRight size={18} />
        </a>
      </section>

      <footer id="contact">
        <div>
          <a className="brand footer-brand" href="#top">
            <img src={assetPath("balavikas-logo.png")} alt="" />
            <span>
              <strong>Balavikas</strong>
              <small>of Fairfax</small>
            </span>
          </a>
          <p>Building character, confidence, and service-minded leadership since 1989.</p>
        </div>
        <div className="footer-links">
          <span>
            <Phone size={18} /> Rao Aunty: 703 338 3025
          </span>
          <span>
            <Phone size={18} /> Vaidy: 703 655 6568
          </span>
          <span>
            <MapPin size={18} /> Northern Virginia / DC metro area
          </span>
          <a href="mailto:info@balavikas.org">
            <Mail size={18} /> info@balavikas.org
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
