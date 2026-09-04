"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const vehicle = String(data.get("vehicle") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const text = `Hi Trinity Wraps, I'm ${name}. Phone: ${phone || "Not provided"}. Vehicle: ${vehicle}. Service: ${service}. ${message}`;
    window.open(`https://wa.me/919573456621?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input name="name" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" placeholder="Your phone number" inputMode="tel" /></label>
        <label>Vehicle<input name="vehicle" placeholder="e.g. KTM Duke 390" required /></label>
        <label>Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Full Car Wrap</option><option>Full Bike Wrap</option><option>Custom Graphics</option><option>Paint Protection</option><option>Window Tinting</option><option>Polishing & Waxing</option><option>Interior Detailing</option><option>Other Customisation</option></select></label>
      </div>
      <label>Tell us what you have in mind<textarea name="message" rows={5} placeholder="Colour, finish, design idea, timeline…" /></label>
      <button className="button primary dark" type="submit">Continue on WhatsApp <span>↗</span></button>
      {sent && <p className="form-note">WhatsApp opened with your project details ready to send.</p>}
    </form>
  );
}
