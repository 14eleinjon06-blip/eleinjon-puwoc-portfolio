"use client";

export default function Home() {
  const projects = [
    { title: "Scholarship Registration and Application Management System", text: "A web-based system concept for managing scholarship registration, applications, requirements, and application status at NVSU.", tags: ["Web System", "Next.js"] },
    { title: "Library Utilization Survey", text: "A student survey project focused on library usage, purposes, and academic needs.", tags: ["Research", "Survey"] },
    { title: "Network Configuration Projects", text: "Hands-on networking activities involving VLANs, trunking, routers, switches, and Packet Tracer.", tags: ["Networking", "Cisco"] }
  ];

  return <>
    <header className="nav"><div className="container nav-inner"><a className="logo" href="#home">EP.</a><nav><a href="#home">Home</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></nav></div></header>

    <main>
      <section id="home" className="hero"><div className="container hero-grid"><div><p className="eyebrow">BS INFORMATION TECHNOLOGY STUDENT</p><h1>Hi, I'm <span>Eleinjon D. Puwoc</span></h1><p className="lead">I’m an IT student interested in web development, programming, networking, and building useful digital solutions.</p><div className="actions"><a className="btn primary" href="#projects">View My Projects</a><a className="btn secondary" href="#contact">Contact Me</a></div></div><div className="hero-card"><img className="avatar" src="/profile.jpg" alt="Eleinjon D. Puwoc" /><p>Future IT Professional</p><small>Nueva Vizcaya State University</small></div></div></section>

      <section id="education" className="section"><div className="container"><p className="eyebrow">EDUCATION</p><h2>College</h2><div className="education-card"><div><h3>Nueva Vizcaya State University</h3><p>Bayombong Campus</p><p className="muted">Bachelor of Science in Information Technology</p></div><span className="badge">BSIT</span></div></div></section>

      <section id="projects" className="section alt"><div className="container"><p className="eyebrow">PROJECTS</p><h2>Things I’ve Worked On</h2><div className="project-grid">{projects.map((p)=><article className="project" key={p.title}><div className="project-number">0{projects.indexOf(p)+1}</div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></div></section>

      <section id="about" className="section"><div className="container about-grid"><div><p className="eyebrow">ABOUT ME</p><h2>Learning by building.</h2></div><div><p>I’m a Bachelor of Science in Information Technology student at Nueva Vizcaya State University. I enjoy learning through hands-on activities and creating simple projects that help me improve my skills.</p><p>I’m currently developing my skills in programming, website development, networking, and systems analysis.</p></div></div></section>

      <section id="contact" className="section contact"><div className="container contact-box"><p className="eyebrow">CONTACT</p><h2>Let’s connect.</h2><p>If you want to know more about my projects or work, feel free to reach out.</p><a className="btn primary" href="mailto:eleinjon.puwoc@gmail.com">Send Me an Email</a></div></section>
    </main>
    <footer><div className="container"><p>© 2026 Eleinjon D. Puwoc. Built with Next.js.</p></div></footer>
  </>;
}
