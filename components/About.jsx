import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="about">
        <div className="container">
            <span className="section-label">About me</span>
            <h2>Building software that matters</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                    I am a <strong>Senior Full-Stack Developer</strong> with over 12 years of experience delivering production-grade web applications and SaaS platforms for clients across four major domains — Education, Travel, eCommerce, and Enterprise.
                    </p>
                    <p>
                    My workflow spans the entire product lifecycle: from <strong>requirements gathering and architecture design</strong> through to deployment and ongoing support. I take pride in writing clean, maintainable code that scales — not just code that ships.
                    </p>
                    <p>
                    My backend expertise is rooted in <strong>PHP (Laravel, CodeIgniter)</strong> and <strong>Python (FastAPI)</strong>, while on the frontend I work with <strong>React</strong> and <strong>Vue.js</strong>. I design and optimize relational databases with MySQL and PostgreSQL, and have deep experience with REST API design and cloud-based deployments.
                    </p>
                    <p>
                    When I am not building, I am mentoring junior developers and contributing to architecture discussions that help teams move faster without accumulating technical debt.
                    </p>
                </div>
                <div>
                    <div className="edu-card">
                        <Image
                            src="/images/mcu.png"
                            alt="MCRPV Bhopal"
                            className="project-icon"
                            width={250}
                            height={250}
                        />
                        <div className="edu-degree">Bachelor of Computer Applications</div>
                        <div className="edu-school">MCRPV, Bhopal, India</div>
                        <div className="edu-year">Jul 1998 - June 2001</div>
                    </div>

                    <div className="edu-card">
                        <Image
                            src="/images/ignou.png"
                            alt="IGNOU New Delhi"
                            className="project-icon"
                            width={250}
                            height={250}
                        />
                        <div className="edu-degree">Master of Computer Applications</div>
                        <div className="edu-school">IGNOU, New Delhi, India</div>
                        <div className="edu-year">July 2003 - June 2006</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}