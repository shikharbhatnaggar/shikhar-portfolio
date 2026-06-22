import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
        <div>
            <div className="hero-badge">Available for projects</div>
            <h1>Tech. Consultant & Senior Full-Stack<br/><span className="accent-word">Developer</span></h1>
            <p className="hero-sub">
            12+ years building scalable SaaS platforms, business automation systems, and custom software across Education, Travel, eCommerce, and Enterprise.
            </p>
            <div className="hero-actions">
            <a href="#projects" className="btn-primary">View projects →</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>
        </div>
        <div className="hero-card">
            <div className="hero-avatar">
                <Image
                    src="/images/shikhar.png"
                    alt="Shikhar Bhatnagar"
                    width={250}
                    height={250}
                    className="avatar"
                />
            </div>
            <h3>Shikhar Bhatnaggar</h3>
            <p>Tech. Consultant | Sr Full-Stack Developer</p>
            <div className="stat-row">
            <div className="stat-item">
                <div className="stat-num">12+</div>
                <div className="stat-label">Years exp.</div>
            </div>
            <div className="stat-item">
                <div className="stat-num">50+</div>
                <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
                <div className="stat-num">4</div>
                <div className="stat-label">Domains</div>
            </div>
            </div>
            <div className="hero-tags">
            <span className="hero-tag">PHP / Laravel</span>
            <span className="hero-tag">Python / FastAPI</span>
            <span className="hero-tag">React / Vue</span>
            <span className="hero-tag">Node.js</span>
            <span className="hero-tag">MySQL</span>
            <span className="hero-tag">PostgreSQL</span>
            <span className="hero-tag">REST APIs</span>
            <span className="hero-tag">Cloud</span>
            </div>
        </div>
    </section>
  );
}