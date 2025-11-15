import React, { useState } from "react";
import "./style.css";

export default function App() {
  // FORM STATES
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("We usually reply within a few days.");
  const [sending, setSending] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzNZLBvqFgLVI_Y8oE4mxTVbv1HLn5T84GGrBRMOwv_TLc-jbL369IGnm_JEUOdjA9t/exec";

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !userEmail || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    setSending(true);
    setStatus("Sending...");

    const data = new URLSearchParams();
    data.append("user_name", userName);
    data.append("user_email", userEmail);
    data.append("message", message);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: data.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      setStatus("Thanks — we received your message!");
      setUserName("");
      setUserEmail("");
      setMessage("");
    } catch (err) {
      setStatus("Network error. Try again.");
    }

    setSending(false);
  }

  return (
    <div className="wpsite">
      <header className="topbar">
        <div className="brand">
          <div className="logo">WP</div>
          <div>
            <div className="title">White Penguin Solutions</div>
            <div className="subtitle">
              College projects • Real solutions • Portfolio
            </div>
          </div>
        </div>

        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-outline">
            Get in touch
          </a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h1>
              We build practical student projects that people actually use.
            </h1>
            <p className="lead">
              White Penguin Solutions is a student-run portfolio & company where
              we build apps and devices across our college years — shareable,
              purchasable, and production-ready.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                Explore projects
              </a>
              <a href="#contact" className="btn-ghost">
                Contact us
              </a>
            </div>

            <div className="email">
              Email:{" "}
              <a href="mailto:Whitepenguinsolutions.in@gmail.com">
                Whitepenguinsolutions.in@gmail.com
              </a>
            </div>
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
              <p className="muted">
                A compact ticketing system with QR generation, offline check-in
                and CSV exports.
              </p>
              <div className="p-muted" style={{ fontSize: "13px" }}>
                Built by Vinayak & Yatin
              </div>
              <div className="card-actions">
                <a className="link">View demo</a>
                <a className="btn-mini" href="#contact">
                  Request this
                </a>
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
                  <div className="p-muted" style={{ fontSize: "13px" }}>
                    Built by Vinayak & Yatin
                  </div>
                  <div className="p-muted">
                    Simple, secure ticketing for events — QR generation, verify
                    offline, export attendance.
                  </div>
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
                <a href="#contact" className="btn-small">
                  Request this
                </a>
              </div>
            </article>

            <article className="project-card muted-card">
              <div>
                <div className="project-title">More to come</div>
                <p className="p-muted">
                  IoT dashboards, automation tools, campus helpers, and client
                  solutions — added here as we release them.
                </p>
                <div
                  className="p-muted"
                  style={{ fontSize: "13px", marginTop: 8 }}
                >
                  Built by: Vinayak (example)
                </div>
              </div>
              <div className="project-foot">
                <div className="tech">Prototype · Client work</div>
                <a href="#contact" className="btn-small">
                  Hire us
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section about">
          <h2>About</h2>
          <p className="p-muted">
            White Penguin Solutions is a student-founded company — a place to
            build, document, and ship real solutions during college. We
            prototype fast and aim for adoption, not just demos.
          </p>

          <div className="team">
            <div className="team-card">
              <div className="name">Vinayak</div>
              <div className="role">Co-founder & CTO</div>
              <div className="desc">
                Leads development, architecture, and technical delivery.
              </div>
            </div>

            <div className="team-card">
              <div className="name">Yatin</div>
              <div className="role">Co-founder & CEO</div>
              <div className="desc">
                Handles product direction, outreach, and business.
              </div>
            </div>

            <div className="team-card">
              <div className="name">Meghana</div>
              <div className="role">Co-founder & COO</div>
              <div className="desc">
                Oversees operations, coordination, and execution across all
                projects.
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION WITH BACKEND CONNECTED */}
        <section id="contact" className="section contact">
          <div className="contact-grid">
            <div className="contact-card card">
              <h3>Contact</h3>
              <p className="p-muted">
                For commissions, demos, or collaborations email us with a brief
                and deadline.
              </p>
              <div className="big-email">
                <a href="mailto:Whitepenguinsolutions.in@gmail.com">
                  Whitepenguinsolutions.in@gmail.com
                </a>
              </div>
            </div>

            {/* FORM */}
            <form className="contact-form card" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="E.g. Priya"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Project brief or query"
                  rows="5"
                  required
                />
              </label>

              <div className="form-footer">
                <button type="submit" className="btn-primary" disabled={sending}>
                  {sending ? "Sending..." : "Send message"}
                </button>

                <div className="p-muted" style={{ fontSize: "13px" }}>
                  {status}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} White Penguin Solutions — Built by
          Vinayak, Yatin & Meghana
        </div>
        <div className="small">
          Privacy • Terms •{" "}
          <a href="mailto:Whitepenguinsolutions.in@gmail.com">
            Whitepenguinsolutions.in@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}