export default function Skills() {
  return (
    <section className="skills" id="skills">
        <div className="container">
            <span className="section-label">Tech stack</span>
            <h2>Tools I build with</h2>
            <p className="section-sub">A broad but deliberate skill set — every tool here has been used in production across real client projects.</p>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skill-cat">Backend</div>
                    <ul className="skill-list">
                    <li>PHP 8.x</li>
                    <li>CodeIgniter / Laravel</li>
                    <li>Python / FastAPI</li>
                    <li>Node.js / Express</li>
                    <li>REST API Design</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">Frontend</div>
                    <ul className="skill-list">
                    <li>React.js</li>
                    <li>Vue.js 3</li>
                    <li>Tailwind CSS</li>
                    <li>Vanila JS</li>
                    <li>HTML5 / CSS3</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">CMS/Platforms</div>
                    <ul className="skill-list">
                    <li>Shopify</li>
                    <li>Wordpress</li>
                    <li>Opencart</li>
                    <li>Drupal</li>
                    <li>Magento</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">Database</div>
                    <ul className="skill-list">
                    <li>MySQL / MariaDB</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>Eloquent ORM</li>
                    <li>Query optimization</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">DevOps & Cloud</div>
                    <ul className="skill-list">
                    <li>AWS / DigitalOcean</li>
                    <li>Docker / Containers</li>
                    <li>Nginx / Apache</li>
                    <li>CI/CD Pipelines</li>
                    <li>Linux server admin</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">Architecture</div>
                    <ul className="skill-list">
                    <li>Multi-tenant SaaS</li>
                    <li>Microservices</li>
                    <li>Event-driven design</li>
                    <li>Queue / Jobs</li>
                    <li>System integrations</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <div className="skill-cat">Tools & Methods</div>
                    <ul className="skill-list">
                    <li>Git / GitHub / GitLab</li>
                    <li>Agile / Scrum</li>
                    <li>Jira / Trello</li>
                    <li>Stripe / Payment APIs</li>
                    <li>Third-party integrations</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}