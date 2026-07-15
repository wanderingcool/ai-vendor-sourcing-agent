import Link from "next/link";

export default function Templates() {
  return <main className="page-shell login-page"><p className="eyebrow">PURCHASE MANAGER</p><h1>Quotation template</h1><section className="data-card"><h2>RFQ template</h2><p>Template and review actions are available from this dashboard.</p><Link className="secondary-button" href="/dashboard/purchase">Back to dashboard</Link></section></main>;
}
