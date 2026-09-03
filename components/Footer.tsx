import Link from "next/link";
import { MAPS_URL, PHONE_DISPLAY, PHONE_E164 } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-main">
        <div>
          <Link className="brand" href="/"><span className="brand-mark">T</span><span>TRINITY <b>WRAPS</b></span></Link>
          <p>Automotive wraps, protection and custom styling in Vijayawada.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/services">Services</Link><Link href="/work">Our Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
          <div><span>Visit</span><a href={MAPS_URL} target="_blank" rel="noreferrer">BRTS Road, Vijayawada ↗</a><a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a><small>Mon–Sat · 10:30 AM–10:00 PM</small></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Trinity Wraps</span><span>Vijayawada · Andhra Pradesh · India</span></div>
    </footer>
  );
}
