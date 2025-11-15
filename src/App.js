import React from "react";
import "./style.css";

/**
 * White Penguin Solutions - single-file App component
 * Pure React + CSS (no Tailwind, no framer-motion) — ready for StackBlitz/local.
 */

export default function App() {
  return (
    <div className="wpsite">
      <header className="topbar">
        <div className="brand">
          <div className="logo">WP</div>
          <div>
            <div className="title">White Penguin Solutions</div>
            <div className="subtitle">College projects • Real solutions • Portfolio</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h1>We build practical student projects that people actually use.</h1>
            <p className="lead">
              White Penguin Solutions is a student-run portfolio & company where we build apps and devices across our college years — shareable,
              purchasable, and production-ready.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">Explore projects</a>
              <a href="#contact" className="btn-ghost">Contact us</a>
            </div>

            <div className="email">Email: <a href="mailto:Whitepenguinsolutions.in@gmail.com">Whitepenguinsolutions.in@gmail.com</a></div>
          </div>

          <div className="hero-right card">
            <div className="card-inner">
              <div className="card-title">Featured — QR Ticket</div>
              <div className="ticket-preview">
                <div className="qrbox" />
                <div className="ticket-meta">
                  <div className="meta-title">Event: Campus Fest</div>
                  <div className="meta-sub">Seat: A12</div>
                </div>
              </div>
              <p className="muted">A compact ticketing system with QR generation, offline check-in and CSV exports.</p>
              <div className="p-muted" style={{ fontSize: "13px" }}>Built by Vinayak & Yatin</div>
              <div className="card-actions">
                <a className="link">View demo</a>
                <a className="btn-mini" href="#contact">Request this</a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="grid">
            <article className="project-card">
              <div className="project-head">
                <div>
                  <div className="project-title">QR Ticket</div>
                  <div className="p-muted" style={{ fontSize: "13px" }}>Built by Vinayak & Yatin</div>
                  <div className="p-muted">Simple, secure ticketing for events — QR generation, verify offline, export attendance.</div>
                </div>
                <div className="tag">Featured</div>
              </div>

              <ul className="features">
                <li>Generate & email QR tickets</li>
                <li>Offline verification mode</li>
                <li>CSV export for attendance</li>
                <li>Admin dashboard</li>
              </ul>

              <div className="project-foot">
                <div className="tech">React · Node · SQLite</div>
                <a href="#contact" className="btn-small">Request this</a>
              </div>
            </article>

            <article className="project-card muted-card">
              <div>
                <div className="project-title">More to come</div>
                <p className="p-muted">We’ll build IoT dashboards, automation tools, campus helpers, and client solutions — added here as we release them.</p>
                <div className="p-muted" style={{ fontSize: "13px", marginTop: 8 }}>Built by: Vinayak (example)</div>
              </div>
              <div className="project-foot">
                <div className="tech">Prototype · Client work</div>
                <a href="#contact" className="btn-small">Hire us</a>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section about">
          <h2>About</h2>
          <p className="p-muted">
            White Penguin Solutions is a student-founded company — a place to build, document, and ship real solutions during college.
            We prototype fast and aim for adoption, not just demos.
          </p>

          <div className="team">
            <div className="team-card">
              <div className="name">Vinayak</div>
              <div className="role">Co-founder & CTO</div>
              <div className="desc">Leads development, architecture, and technical delivery.</div>
            </div>

            <div className="team-card">
              <div className="name">Yatin</div>
              <div className="role">Co-founder & CEO</div>
              <div className="desc">Handles product direction, outreach, and business.</div>
            </div>

            <div className="team-card">
              <div className="name">Meghana</div>
              <div className="role">Co-founder & COO</div>
              <div className="desc">Oversees operations, coordination, and execution across all projects.</div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-grid">
            <div className="contact-card card">
              <h3>Contact</h3>
              <p className="p-muted">For commissions, demos, or collaborations email us with a brief and deadline.</p>
              <div className="big-email"><a href="mailto:Whitepenguinsolutions.in@gmail.com">Whitepenguinsolutions.in@gmail.com</a></div>
            </div>

            <form className="contact-form card" onSubmit={(e) => e.preventDefault()}>
              <label>Name<input placeholder="E.g. Priya" /></label>
              <label>Email<input placeholder="you@example.com" /></label>
              <label>Message<textarea placeholder="Project brief or query" rows="5" /></label>
              <div className="form-footer">
                <button type="submit" className="btn-primary">Send message</button>
                
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} White Penguin Solutions — Built by Vinayak, Yatin & Meghana</div>
        <div className="small">Privacy • Terms • <a href="mailto:Whitepenguinsolutions.in@gmail.com">Whitepenguinsolutions.in@gmail.com</a></div>
      </footer>
    </div>
  );
}
