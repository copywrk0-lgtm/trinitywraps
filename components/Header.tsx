"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WHATSAPP_URL } from "../lib/constants";
import { navigation } from "../lib/navigation";

const links = navigation;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="nav shell">
      <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Trinity Wraps home">
        <span className="brand-logo"><img src="/images/trinity-logo-mark.png" alt="" aria-hidden="true" /></span><span>TRINITY <b>WRAPS</b></span>
      </Link>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
      <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
      <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
        <span></span><span></span>
      </button>
    </header>
  );
}
