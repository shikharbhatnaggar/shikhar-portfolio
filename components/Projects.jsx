import Image from "next/image";

export default function Projects() {
  return (
    <section className="projects" id="projects">
        <div className="container">
            <div className="projects-header">
                <div>
                    <span className="section-label">Selected work</span>
                    <h2>Projects I have built</h2>
                </div>
                <p className="section-sub" style={{ maxWidth:"320px", fontSize:"14px"}}>End-to-end delivery across SaaS, education, healthcare, and travel platforms.</p>
            </div>

            <div className="projects-grid">

                <div className="project-card">
                    <Image
                        src="/images/restroai.png"
                        alt="AI-Powered QR Ordering & Restaurant Automation System"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-blue">SaaS MVP</span>
                    <h3>AI-Powered QR Ordering & Restaurant Automation System</h3>
                    <p className="project-desc">The proposed solution is an AI-powered ordering and restaurant automation platform that enables customers to interact with a virtual assistant directly from their table by scanning a QR code. The system streamlines menu browsing, order placement, order tracking, and payment management while reducing staff workload and improving customer experience.</p>
                    <ul className="project-highlights">
                        <li>QR-Based Table Access</li>
                        <li>AI Menu Assistant</li>
                        <li>Smart Order Placement</li>
                        <li>Order Management Automation</li>
                        <li>Kitchen & Staff Dashboard</li>
                        <li>Customer Experience Enhancements</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Python</span>
                        <span className="stack-tag">Streamlit</span>
                        <span className="stack-tag">Open AI</span>
                        <span className="stack-tag">Pymysql</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://restroaidemo.streamlit.app" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            
                <div className="project-card">
                    <Image
                        src="/images/ywv.png"
                        alt="Personalized POD Service"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-blue">eCommerce</span>
                    <h3>Personalized POD Service</h3>
                    <p className="project-desc">A print-on-demand (POD) solution specifically designed for Shopify store owners looking to elevate their product offerings. A scalable multi-vendor marketplace supporting independent sellers, product management, inventory tracking, and automated payout workflows.</p>
                    <ul className="project-highlights">
                        <li>Multi-tenant architecture scoped by shopify store id with superadmin + vendor roles</li>
                        <li>22+ tables normalized schema covering products, specifications, orders, vendors, prices, sizes, subscriptions, payments etc</li>
                        <li>Custom css engine created and implemented</li>
                        <li>Multi-vendor architecture with vendor-level reporting</li>
                        <li>Product catalogue with variants, attributes, and smart filtering</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">PHP / Codeigniter</span>
                        <span className="stack-tag">PostgresSQL</span>
                        <span className="stack-tag">Bootstrap Achitech theme</span>
                        <span className="stack-tag">Spatie Permissions</span>
                        <span className="stack-tag">Adobe PDF Library</span>
                        <span className="stack-tag">Orderdesk SDK</span>
                        <span className="stack-tag">Slack API</span>
                        <span className="stack-tag">Shopify SDK</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://apps.shopify.com/yeswefulfill" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

           
                <div className="project-card">
                    <Image
                        src="/images/staff-sutra-screens.png"
                        alt="Staff training SaaS platform"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-teal">Healthcare SaaS</span>
                    <h3>StaffSutra / MedTrainPro</h3>
                    <p className="project-desc">A healthcare staff training SaaS platform with a rich admin panel, staff portal, live attendance tracking, certificates, and analytics dashboards.</p>
                    <ul className="project-highlights">
                        <li>Admin dashboard with Plotly.js analytics and performance reports</li>
                        <li>Staff portal with training progress, certificate generation, and notifications</li>
                        <li>Robust attendance/enrollment flow with DELETE + INSERT upsert pattern</li>
                        <li>Dark navy-to-teal design system with Tailwind CSS</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Core PHP</span>
                        <span className="stack-tag">MySQL</span>
                        <span className="stack-tag">Tailwind CSS</span>
                        <span className="stack-tag">Plotly.js</span>
                        <span className="stack-tag">JavaScript</span>
                    </div>
                    <div className="project-footer">
                        <a href="#" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            
                <div className="project-card">
                    <Image
                        src="/images/getfares.png"
                        alt="B2B Travel Booking Platform"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-orange">Travel</span>
                    <h3>B2B Travel Booking Platform</h3>
                    <p className="project-desc">A full-featured travel and tour booking platform with real-time availability, dynamic pricing, payment gateway integration, and operator dashboards.</p>
                    <ul className="project-highlights">
                        <li>Real-time seat/slot availability with Redis caching</li>
                        <li>Stripe and PayPal payment gateway integration</li>
                        <li>Operator-facing dashboard with booking analytics</li>
                        <li>REST API consumed by mobile and web clients</li>
                        <li>Multi GDS integrated</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Laravel</span>
                        <span className="stack-tag">Vue.js</span>
                        <span className="stack-tag">MySQL</span>
                        <span className="stack-tag">Redis</span>
                        <span className="stack-tag">Stripe API</span>
                        <span className="stack-tag">REST/SOAP API</span>
                        <span className="stack-tag">GDS API</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://www.getfares.com/" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            
                <div className="project-card">
                    <Image
                        src="/images/eduvow.png"
                        alt="University/College/School Aggregator"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-purple">Education</span>
                    <h3>University/College/School Aggregator</h3>
                    <p className="project-desc">An Indian education technology and career counseling platform. It aggregates student and institutional data points to help individuals explore courses, compare colleges, and prepare for competitive exams. Good source for lead generation.</p>
                    <ul className="project-highlights">
                        <li>Provides comprehensive databases detailing thousands of colleges, universities, and courses across India.</li>
                        <li>Serves as an information hub for exam schedules, application dates, admit card releases, and results.</li>
                        <li>Offers personalized expert consulting to assist parents and students in navigating competitive exams and college admissions.</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Core PHP</span>
                        <span className="stack-tag">Vue.js</span>
                        <span className="stack-tag">PostgreSQL</span>
                        <span className="stack-tag">Ubuntu Apache Server</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://eduvow.com/" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            
                <div className="project-card">
                    <Image
                        src="/images/rxfinder.png"
                        alt="Enterprise CRM & Automation"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-green">Enterprise</span>
                    <h3>Enterprise CRM & Automation</h3>
                    <p className="project-desc">A bespoke CRM and business automation system for an enterprise client, replacing spreadsheet-based workflows with automated pipelines, approvals, and reporting.</p>
                    <ul className="project-highlights">
                        <li>Locate nearby chemist for specific medicine</li>
                        <li>Provide health tests using Healthians API</li>
                        <li>Custom pipeline builder with drag-and-drop stage management</li>
                        <li>Role-based access control with granular permissions</li>
                        <li>Automated email/SMS triggers using queued jobs</li>
                        <li>Executive reporting with exportable PDF/Excel</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Laravel</span>
                        <span className="stack-tag">Vue.js</span>
                        <span className="stack-tag">MySQL</span>
                        <span className="stack-tag">Laravel Queues</span>
                        <span className="stack-tag">DomPDF</span>
                        <span className="stack-tag">Healthians API</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://rxfinder.in/" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            
                <div className="project-card">
                    <Image
                        src="/images/opai.png"
                        alt="MLM Platform"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-pink">API / Backend</span>
                    <h3>MLM Platform</h3>
                    <p className="project-desc">A high-performance microservices backend built with Python FastAPI, powering a data-intensive analytics product with async processing and real-time WebSocket support.</p>
                    <ul className="project-highlights">
                        <li>Async FastAPI services with PostgreSQL and SQLAlchemy</li>
                        <li>JWT + OAuth2 authentication layer</li>
                        <li>Real-time WebSocket notifications and event streaming</li>
                        <li>Dockerized deployment on AWS with auto-scaling</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">NextJS</span>
                        <span className="stack-tag">Python</span>
                        <span className="stack-tag">FastAPI</span>
                        <span className="stack-tag">PostgreSQL</span>
                        <span className="stack-tag">Docker</span>
                        <span className="stack-tag">AWS</span>
                        <span className="stack-tag">WebSockets</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://user.ordinarypeopleai.com" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>


            
                <div className="project-card">
                    <Image
                        src="/images/swed.png"
                        alt="SWED Store"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-pink">eCommerce</span>
                    <h3>SWED Store</h3>
                    <p className="project-desc">Large-catalog product architecture, advanced collection filtering, custom cart and promotion logic.</p>
                    <ul className="project-highlights">
                        <li>Build and customize Shopify themes</li>
                        <li>Modify product and collection pages</li>
                        <li>Create custom product data using Metafields</li>
                        <li>Optimize the store to increase sales and conversions.</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Shopify OS 2.0</span>
                        <span className="stack-tag">Liquid</span>
                        <span className="stack-tag">Metafields</span>
                        <span className="stack-tag">CRO</span>
                    </div>
                    <div className="project-footer">
                        <a href="#" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>


            
                <div className="project-card">
                    <Image
                        src="/images/indianstore.png"
                        alt="Indian Store"
                        className="project-img"
                        width={250}
                        height={250}
                    />
                    <div className="project-body">
                    <span className="project-domain domain-pink">eCommerce</span>
                    <h3>Indian Store</h3>
                    <p className="project-desc">Data collection, categorisation and product page template creation</p>
                    <ul className="project-highlights">
                        <li>Build and customize Shopify product page themes</li>
                        <li>Scrap adn collect shopify product and collection pages</li>
                        <li>Create custom product data using Metafields</li>
                        <li>Setup n8n wordflow to rephrase the description of collected data using Open AI</li>
                    </ul>
                    <div className="project-stack">
                        <span className="stack-tag">Shopify</span>
                        <span className="stack-tag">Liquid</span>
                        <span className="stack-tag">Metafields</span>
                        <span className="stack-tag">Python</span>
                        <span className="stack-tag">Opean AI</span>
                    </div>
                    <div className="project-footer">
                        <a href="https://indianstore.live" className="project-link">View project <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg></a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}