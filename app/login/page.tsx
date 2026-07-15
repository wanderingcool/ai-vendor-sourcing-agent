Exit code: 0
Wall time: 3.2 seconds
Output:
import Link from "next/link";

const roles = [
  ["Purchase Manager", "purchase@example.com / +919900000001", "/dashboard/purchase"],
  ["Production Manager", "production@example.com / +919900000002", "/dashboard/production"],
  ["QC Team", "qc@example.com / +919900000003", "/dashboard/qc"],
  ["Demo Super User", "admin@example.com / +919900000004", "/demo"],
];

export default function Login() {
  return (
    <main className="page-shell login-page">
      <p className="eyebrow">MOCK LOGIN</p>
      <h1>Demo access</h1>
      <section className="login-card" aria-label="Demo personas">
        {roles.map(([name, contact, href]) => (
          <Link className="login-row" href={href} key={name}>
            <div><strong>{name}</strong><span>{contact}</span></div>
            <span className="arrow" aria-hidden="true">â†’</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

