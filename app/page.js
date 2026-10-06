"use client";

export default function Home() {
  const projects = [
    { title: "Scholarship Registration and Application Management System", text: "A web-based system concept for managing scholarship registration, applications, requirements, and application status at NVSU.", tags: ["Web System", "Next.js"] },
    { title: "Library Utilization Survey", text: "A student survey project focused on library usage, purposes, and academic needs.", tags: ["Research", "Survey"] },
    { title: "Network Configuration Projects", text: "Hands-on networking activities involving VLANs, trunking, routers, switches, and Packet Tracer.", tags: ["Networking", "Cisco"] }
  ];

  return <>
    <header className="nav">
      <div className="container nav-inner">
        <a className="logo" href="#home">EDP<span>✦</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="sparkle sparkle-one">✦</div>
        <div className="sparkle sparkle-two">♡</div>
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-name" aria-label="ELEINJON D. PUWOC">
              <span className="name-line name-line-one"><span>E</span><span>L</span><span>E</span><span>I</span><span>N</span><span>J</span><span>O</span><span>N</span><span>&nbsp;</span><span>D</span><span>.</span></span>
              <span className="name-line name-line-two name-accent"><span>P</span><span>U</span><span>W</span><span>O</span><span>C</span></span>
            </h1>
            <p className="lead">I’m an IT student who enjoys learning programming, web development, networking, and building simple digital solutions.</p>
            <div className="actions">
              <a className="btn primary" href="#projects">View My Projects</a>
              <a className="btn secondary" href="#contact">Let’s Connect ♡</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-glow">
              <div className="photo-frame">
                <img className="avatar" src="/profile.jpg" alt="Eleinjon D. Puwoc" />
              </div>
            </div>
            <p>Eleinjon D. Puwoc</p>
            <small>BS Information Technology Student</small>
            <span className="school">Nueva Vizcaya State University</span>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <p className="eyebrow">EDUCATION</p>
          <h2>My College Journey</h2>
          <div className="education-card">
            <div>
              <h3>Nueva Vizcaya State University</h3>
              <p>Bayombong Campus</p>
              <p className="muted">Bachelor of Science in Information Technology</p>
            </div>
            <span className="badge">BSIT ✦</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section alt">
        <div className="container">
          <p className="eyebrow">PROJECTS</p>
          <h2>Things I’ve Worked On</h2>
          <div className="project-grid">
            {projects.map((p, i) => <article className="project" key={p.title}>
              <div className="project-number">0{i + 1} ·</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <p className="eyebrow">SKILLS</p>
          <h2>Skills I’m Learning</h2>
          <div className="skills-grid">
            <article className="skill-card"><span>01</span><h3>HTML &amp; CSS</h3><p>Basic webpage structure and styling.</p></article>
            <article className="skill-card"><span>02</span><h3>JavaScript</h3><p>Basic programming and simple interactions.</p></article>
            <article className="skill-card"><span>03</span><h3>Next.js</h3><p>Basic frontend development with Next.js.</p></article>
            <article className="skill-card"><span>04</span><h3>SQL</h3><p>Basic database concepts and queries.</p></article>
            <article className="skill-card"><span>05</span><h3>Networking</h3><p>Basic VLAN, IP addressing, and Packet Tracer activities.</p></article>
            <article className="skill-card"><span>06</span><h3>GitHub</h3><p>Basic repository and project management.</p></article>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Learning, creating, and growing.</h2>
          </div>
          <div>
            <p>I’m Eleinjon D. Puwoc, a Bachelor of Science in Information Technology student at Nueva Vizcaya State University.</p>
            <p>I enjoy learning through hands-on activities and creating simple projects that help me improve my skills in programming, website development, networking, and systems analysis.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-box">
          <div className="contact-heart">♡</div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s create something nice.</h2>
          <p>If you want to know more about my projects or work, feel free to reach out.</p>
          <a className="btn primary" href="mailto:eleinjon.puwoc@gmail.com">Send Me an Email ♡</a>
        </div>
      </section>
    </main>

    <footer><div className="container"><p>© 2026 Eleinjon D. Puwoc · Built with Next.js ♡</p></div></footer>
  </>;
}
