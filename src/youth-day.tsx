import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  CalendarDays,
  ClipboardList,
  Clock,
  Mail,
  MapPin,
  Medal,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import "./styles.css";

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const homePath = `${import.meta.env.BASE_URL}`;

const categories = [
  {
    group: "Pre-Elementary",
    grades: "Grade 1 and below",
    competitions: ["Coloring", "Religious Chanting", "Story Telling"],
  },
  {
    group: "Elementary I",
    grades: "Grades 2-3",
    competitions: ["Coloring", "Religious Chanting", "Story Telling", "Recitation"],
  },
  {
    group: "Elementary II",
    grades: "Grades 4-5",
    competitions: ["Coloring", "Religious Chanting", "Story Telling", "Recitation"],
  },
  {
    group: "Intermediate",
    grades: "Grades 6-8",
    competitions: ["Religious Chanting", "Recitation", "Speech", "Essay"],
  },
  {
    group: "High School",
    grades: "Grades 9-12",
    competitions: ["Religious Chanting", "Recitation", "Speech", "Essay"],
  },
];

const faqs = [
  "Please bring your own pencils, crayons, and paper. To be consistent, only crayons will be allowed for the coloring competition.",
  "Drawing for the coloring competition will be given on the day of the competition, and a 60-minute time period will be allotted for coloring.",
  "Essays for assigned topics can be prepared and researched ahead of time, but no notes or references can be used on the day of the competition.",
  "Essays must be written in the 60-minute time period allotted.",
  "Speeches must be between 3-5 minutes with a 30-second grace period.",
  "Every religious chant, regardless of language or religion, must be explained in English. Chants must be between 2-3 minutes with a 30-second grace period.",
  "Stories with a clear moral and ethical message, irrespective of religious origin, will be accepted. Stories must be between 2-3 minutes with a 30-second grace period.",
  "Your grade is the one you will be entering in the new school year.",
];

function RegistrationButtons() {
  return (
    <div className="registration-actions" id="registration">
      <a className="button primary disabled" href="#registration" aria-disabled="true">
        Competitor registration coming soon
      </a>
      <a className="button secondary disabled" href="#registration" aria-disabled="true">
        Judge / volunteer registration coming soon
      </a>
    </div>
  );
}

function YouthDayPage() {
  return (
    <main className="event-page">
      <header className="site-header event-header">
        <a className="brand" href={homePath} aria-label="Balavikas home">
          <img src={assetPath("balavikas-logo.png")} alt="" />
          <span>
            <strong>Balavikas</strong>
            <small>of Fairfax</small>
          </span>
        </a>
        <a className="back-link" href={homePath}>
          <ArrowLeft size={18} /> Back to site
        </a>
      </header>

      <section className="event-hero-detail">
        <div>
          <p className="eyebrow">Youth Day Competitions 2026</p>
          <h1>Youth Day 2026.</h1>
          <p>
            All are welcome to participate. There is no cost for participation. All participants
            will be recognized with certificates, and winners will be awarded trophies.
          </p>
          <RegistrationButtons />
        </div>
        <aside className="event-facts" aria-label="Youth Day event facts">
          <div>
            <CalendarDays size={22} />
            <span>
              <strong>Saturday, July 11, 2026</strong>
              <small>Check-in: 9:30 AM - 10:00 AM</small>
            </span>
          </div>
          <div>
            <Clock size={22} />
            <span>
              <strong>Competitions start after check-in</strong>
              <small>Registration closes July 10, 2026 at 11:59 PM.</small>
            </span>
          </div>
          <div>
            <MapPin size={22} />
            <span>
              <strong>Vintage Park Plaza</strong>
              <small>45365 Vintage Park Plaza, Sterling, VA 20166</small>
            </span>
          </div>
        </aside>
      </section>

      <section className="section event-section">
        <div className="section-heading">
          <p className="eyebrow">Categories</p>
          <h2>Competitions by grade level.</h2>
        </div>
        <div className="program-grid">
          {categories.map((category) => (
            <article className="program-card event-category-card" key={category.group}>
              <Medal size={26} />
              <h3>{category.group}</h3>
              <p>{category.grades}</p>
              <ul className="pill-list">
                {category.competitions.map((competition) => (
                  <li key={competition}>{competition}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section topic-section">
        <div>
          <p className="eyebrow">Speech & Essay Topics</p>
          <h2>Topics will be announced.</h2>
        </div>
        <div className="topic-grid">
          <article>
            <h3>High School Essay</h3>
            <span className="topic-line" aria-label="Topic not yet announced" />
          </article>
          <article>
            <h3>High School Speech</h3>
            <span className="topic-line" aria-label="Topic not yet announced" />
          </article>
          <article>
            <h3>Intermediate Essay</h3>
            <span className="topic-line" aria-label="Topic not yet announced" />
          </article>
          <article>
            <h3>Intermediate Speech</h3>
            <span className="topic-line" aria-label="Topic not yet announced" />
          </article>
        </div>
      </section>

      <section className="section event-section">
        <div className="section-heading">
          <p className="eyebrow">Guidelines</p>
          <h2>What participants should know.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article key={faq}>
              <ClipboardList size={21} />
              <p>
                <strong>{index + 1}.</strong> {faq}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section donate-band event-contact-band">
        <div>
          <p className="eyebrow">Questions</p>
          <h2>Contact the competition directors.</h2>
          <div className="contact-stack">
            <span>
              <Phone size={18} /> Vyochana Mamillapali: 571 395 3508
            </span>
            <span>
              <Phone size={18} /> Siri Duddella: 703 623 7474
            </span>
            <a href="mailto:yd@balavikas.org">
              <Mail size={18} /> yd@balavikas.org
            </a>
          </div>
        </div>
        <div className="trophy-note">
          <Trophy size={34} />
          <strong>Certificates for all participants</strong>
          <span>Trophies awarded to winners.</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<YouthDayPage />);
