import Link from "next/link";
import MapBlock from "../components/MapBlock";
import { gallery, MAPS_URL, services, WHATSAPP_URL } from "../lib/site";

function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
 return <main>
  <section className="hero shell wide-shell">
   <div className="hero-copy">
    <p className="eyebrow">VIJAYAWADA · AUTOMOTIVE CUSTOMISATION</p>
    <h1>MAKE YOUR<br/><em>RIDE</em> STAND OUT.</h1>
    <p className="hero-sub">Wraps, custom graphics, protection and styling for cars & bikes. Built around the way you want your vehicle to look.</p>
    <div className="hero-actions"><a className="button primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Get a Quote <Arrow/></a><Link className="button ghost" href="/work">See Our Work</Link></div>
   </div>
   <div className="hero-media"><img src="/images/trinity_wraps_01_ktm.jpg" alt="Custom KTM motorcycle at Trinity Wraps"/><div className="hero-overlay"></div><div className="hero-tag"><span>01</span><span>WRAPS / CUSTOM / PROTECT</span></div></div>
  </section>

  <section className="ticker" aria-label="Services"><div>FULL CAR WRAPS</div><span>✦</span><div>BIKE WRAPS</div><span>✦</span><div>CUSTOM GRAPHICS</div><span>✦</span><div>PAINT PROTECTION</div><span>✦</span><div>WINDOW TINT</div></section>

  <section className="intro shell section-pad"><div className="section-kicker">01 / WHAT WE DO</div><div><h2>YOUR VEHICLE.<br/><span>YOUR STYLE.</span></h2><p>Trinity Wraps is an automotive wrap and modification studio in Vijayawada focused on making cars and bikes look unmistakably yours. Choose a subtle finish or go all-in — the work starts with your idea.</p><Link className="text-link" href="/about">About Trinity <Arrow/></Link></div></section>

  <section className="services-home section-pad"><div className="shell"><div className="section-heading split-heading"><div><div className="section-kicker">02 / SERVICES</div><h2>BUILT TO<br/><em>TRANSFORM.</em></h2></div><p>From a clean colour change to a full visual makeover, we cover the details that make a vehicle feel finished.</p></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.no}><span>{s.no}</span><h3>{s.title}</h3><p>{s.text}</p><span className="service-arrow">↗</span></article>)}</div><div className="section-end"><Link className="text-link" href="/services">Explore all services <Arrow/></Link></div></div></section>

  <section className="work-home section-pad"><div className="shell"><div className="section-heading work-heading"><div className="section-kicker">03 / SELECTED WORK</div><h2>SEE IT.<br/><em>FEEL IT.</em></h2></div><div className="before-after"><div className="ba-image"><img src="/images/trinity_wraps_05_service_collage.jpg" alt="Vehicle transformation collage"/><span>BEFORE → AFTER</span></div><div className="ba-copy"><p className="eyebrow">THE POINT IS SIMPLE</p><h3>DON&apos;T JUST<br/>DRIVE IT.</h3><p>Whether it&apos;s a colour change, a custom graphic, protection film or a full visual makeover, your vehicle should feel like it belongs to you.</p><a className="button ghost light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to Trinity <Arrow/></a></div></div><div className="gallery-preview">{gallery.slice(1,4).map((item,i)=><figure key={item.src}><div className="media-card"><img src={item.src} alt={item.label}/><span className="media-index">0{i+1}</span></div><figcaption><b>{item.label}</b><span>{item.category}</span></figcaption></figure>)}</div><div className="section-end"><Link className="text-link" href="/work">View project gallery <Arrow/></Link></div></div></section>

  <section className="location-home shell section-pad"><div className="location-visual"><MapBlock/></div><div className="location-copy"><div className="section-kicker">04 / FIND US</div><h2>COME SEE<br/><em>THE SHOP.</em></h2><p>24-29-203C, BRTS Road,<br/>Gulabithota, Railway Colony,<br/>Vijayawada, Andhra Pradesh 520004</p><div className="hours"><strong>MON — SAT</strong><span>10:30 AM — 10:00 PM</span></div><a className="text-link" href={MAPS_URL} target="_blank" rel="noreferrer">Open in Google Maps <Arrow/></a></div></section>

  <section className="contact-banner section-pad"><div className="shell"><div className="section-kicker">05 / START A PROJECT</div><h2>READY TO CHANGE<br/>THE <em>LOOK?</em></h2><div className="contact-banner-bottom"><p>Tell us what you&apos;re thinking. We&apos;ll take it from there.</p><div><a className="button dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp Us <Arrow/></a><Link className="button line-dark" href="/contact">Project enquiry</Link></div></div></div></section>
 </main>
}
