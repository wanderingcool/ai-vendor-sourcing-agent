import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="hero-card dark-card">
        <p className="eyebrow lime-text">PURCHASE MANAGEMENT SYSTEM</p>
        <h1>End-to-end procurement demo</h1>
        <p className="hero-copy">
          Use mock login to present the PRD workflow from vendor invitation through QC review with restricted access for each role.
        </p>
        <Link className="primary-button" href="/login">
          <span className="button-icon">â™™</span> Open mock login
        </Link>
      </section>

      <section className="walkthrough-card">
        <div className="section-icon">â–£</div>
        <div>
          <h2>Client walkthrough entry</h2>
          <p>Start with the Demo Super User when presenting, then switch personas as the procurement flow moves across teams.</p>
          <div className="feature-stack">
            <div>Separate mock logins for Purchase, Vendor, Production, QC, and Demo Super User</div>
            <div>Role-based module access with guarded routes</div>
            <div>Browser-local workflow state for repeatable client presentations</div>
          </div>
        </div>
      </section>

      <aside className="presenter-card">
        <div>
          <p className="eyebrow">PRESENTER PATH</p>
          <h2>Walk the full procurement story</h2>
          <p>Login as Demo Super User and open the demo console for the guided PRD sequence.</p>
        </div>
        <Link className="secondary-button" href="/login">Choose persona <span>â†’</span></Link>
      </aside>
    </main>
  );
}
