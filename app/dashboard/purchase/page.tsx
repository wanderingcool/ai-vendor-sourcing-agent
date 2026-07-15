"use client";

import Link from "next/link";
import { useState } from "react";

const vendors = [
  { rank: "L1", vendor: "Shakti Industrial Suppliers", quote: "QT-001", total: "INR 1,25,000", status: "Approved", remarks: "L1 selection" },
  { rank: "L2", vendor: "Apex Trading Co.", quote: "QT-002", total: "INR 1,32,000", status: "Submitted", remarks: "" },
  { rank: "L3", vendor: "Prime Materials India", quote: "QT-003", total: "INR 1,41,500", status: "Submitted", remarks: "" },
];

export default function PurchaseDashboard() {
  const [sampleData, setSampleData] = useState(false);
  const [reasons, setReasons] = useState<Record<string, string>>({});
  const [approved, setApproved] = useState("QT-001");

  const approve = (quote: string) => {
    if (reasons[quote]?.trim()) setApproved(quote);
  };

  return (
    <main className="page-shell dashboard-page">
      <div className="demo-toolbar">
        <p>Demo mode: Clean Walkthrough starts from vendor invite. Sample Data loads prefilled records.</p>
        <button className="ghost-button" type="button">Sync Shared Data</button>
        <button className="ghost-button" type="button" onClick={() => { setSampleData(false); setApproved(""); }}>Reset to Clean Walkthrough</button>
        <button className="danger-button" type="button" onClick={() => setSampleData(true)}>Load Sample Data</button>
      </div>

      <section className="dashboard-banner">
        <div><p className="eyebrow">CLIENT DEMO PROTOTYPE</p><h2>Purchase Manager Dashboard</h2></div>
        <div className="role-pill">Purchase Manager Â· <Link href="/notifications">Notifications</Link></div>
      </section>

      <div className="dashboard-main">
        <div className="stats-grid">
          <Stat label="Total vendors" value={sampleData ? "3" : "0"} />
          <Stat label="Quotations received" value={sampleData ? "3" : "0"} />
          <Stat label="Pending approvals" value={sampleData ? "2" : "0"} />
          <Stat label="Approved quotations" value={sampleData ? "1" : "0"} />
        </div>

        <section className="next-action">
          <div><p className="eyebrow">NEXT ACTION</p><h2>Review ranked quotations</h2><p>Open the quotation comparison table and approve the preferred vendor.</p></div>
          <Link className="secondary-button" href="/quotations/review">Review quotations</Link>
        </section>

        <section className="data-card">
          <div className="card-heading"><div><h2>Recent quotation submissions</h2><p>Template and review actions are available from this dashboard.</p></div><Link className="ghost-button" href="/templates">Manage quotation template</Link></div>
          <table><thead><tr><th>Vendor</th><th>Quotation</th><th>Total</th><th>Status</th></tr></thead><tbody>
            {!sampleData ? <tr><td className="empty-row" colSpan={4}>No records found.</td></tr> : vendors.map((vendor) => <tr key={vendor.quote}><td>{vendor.vendor}</td><td>{vendor.quote}</td><td>{vendor.total}</td><td><span className={`status ${vendor.status === "Submitted" ? "submitted" : ""}`}>{vendor.status}</span></td></tr>)}
          </tbody></table>
        </section>

        <section className="data-card">
          <h3>Quotation comparison</h3>
          <table><thead><tr><th>Rank</th><th>Vendor</th><th>Quotation</th><th>Total</th><th>Status</th><th>Remarks</th><th>Action</th></tr></thead><tbody>
            {!sampleData ? <tr><td className="empty-row" colSpan={7}>No records found.</td></tr> : vendors.map((vendor) => <tr key={vendor.quote}><td>{vendor.rank}</td><td>{vendor.vendor}</td><td>{vendor.quote}</td><td>{vendor.total}</td><td><span className={`status ${approved !== vendor.quote ? "submitted" : ""}`}>{approved === vendor.quote ? "Approved" : "Submitted"}</span></td><td>{vendor.remarks || <input className="reason-input" aria-label={`Reason for ${vendor.quote}`} placeholder="Reason for non-L1" value={reasons[vendor.quote] || ""} onChange={(e) => setReasons({ ...reasons, [vendor.quote]: e.target.value })} />}</td><td><button className="table-button" type="button" disabled={vendor.quote === approved} onClick={() => approve(vendor.quote)}>{vendor.quote === approved ? "Approved" : "Approve"}</button></td></tr>)}
          </tbody></table>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="stat"><div className="stat-label">{label}</div><div className="stat-value">{value}</div></div>;
}
