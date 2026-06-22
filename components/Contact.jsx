export default function Contact() {
  return (
    <section id="contact" className="contact-section">
        <div className="container">
            <span className="section-label">Lets work together</span>
            <h2>Got a project in mind?</h2>
            <div className="contact-grid">
            <div>
                <p className="contact-sub">
                Whether you need a new platform built from scratch, an existing system improved, or a technical partner to collaborate with — I would love to hear about it. I typically respond within 24 hours.
                </p>
                <div className="contact-items">
                <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <span><a href="mailto:bhatnaggar.shikhar@gmail.com">bhatnaggar.shikhar@gmail.com</a></span>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">💼</div>
                    <span><a href="https://linkedin.com/in/shikharbhatnaggar">linkedin.com/in/shikharbhatnaggar</a></span>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">🐙</div>
                    <span><a href="https://github.com/shikharbhatnaggar">github.com/shikharbhatnaggar</a></span>
                </div>
                <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <span>Gwalior, MP, India · Remote worldwide</span>
                </div>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:"24px"}}>
                <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"16px", padding:"32px", textAlign:"center"}}>
                <div style={{fontSize:"52px", marginBottom:"16px"}}>💬</div>
                <h3 style={{fontFamily:"var(--font-display)", fontSize:"20px", fontWeight:"600", color:"#fff", marginBottom:"8px"}}>Lets chat on WhatsApp</h3>
                <p style={{fontSize:"14px", color:"rgba(255,255,255,0.5)", marginBottom:"28px", lineHeight:"1.65"}}>Drop me a message directly — I typically reply within a few hours. Tell me about your project and lets see how I can help.</p>
                <a href="https://wa.me/919039303301?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank" rel="noopener noreferrer"
                    style={{display:"inline-flex", alignItems:"center", gap:"10px", background:"#25D366", color:"#fff", padding:"14px 32px", borderRadius:"100px", fontSize:"15px", fontWeight:"700", textDecoration:"none", transition:"background 0.2s, transform 0.15s", fontFamily:"var(--font-body)" }}
                    className="whatsapp-btn"
                    >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Message me on WhatsApp
                </a>
                </div>
        
                <div style={{display:"flex", gap:"12px" }}>
                <a href="mailto:bhatnaggar.shikhar@gmail.com"
                    style={{flex:"1", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"14px", color:"rgba(255,255,255,0.75)", fontSize:"13px", fontWeight:"500", textDecoration:"none", fontFamily:"var(--font-body)", transition:"background 0.2s"}}
                    >
                    📧 Email me
                </a>
                <a href="https://linkedin.com/in/shikharbhatnaggar" target="_blank" rel="noopener"
                    style={{flex:"1", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"14px", color:"rgba(255,255,255,0.75)", fontSize:"13px", fontWeight:"500", textDecoration:"none", fontFamily:"var(--font-body)", transition:"background 0.2s"}}
                    >
                    💼 LinkedIn
                </a>
                <a href="https://github.com/shikharbhatnaggar" target="_blank" rel="noopener"
                    style={{flex:"1", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"14px", color:"rgba(255,255,255,0.75)", fontSize:"13px", fontWeight:"500", textDecoration:"none", fontFamily:"var(--font-body)", transition:"background 0.2s"}} 
                    >
                    🐙 GitHub
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}