const services = [
  {
    no: "01",
    title: "Full Car Wraps",
    text: "Give your car a completely new identity with a full vinyl transformation.",
  },
  {
    no: "02",
    title: "Full Bike Wraps",
    text: "Custom styling for motorcycles, from clean colour changes to bold graphics.",
  },
  {
    no: "03",
    title: "Custom Graphics",
    text: "Personalised graphics and vinyl work built around the look you want.",
  },
  {
    no: "04",
    title: "Scratch Protection",
    text: "Protective film for cars and bikes while keeping the finish looking sharp.",
  },
  {
    no: "05",
    title: "Polishing & Waxing",
    text: "Bring back gloss and give tired paintwork a cleaner, deeper finish.",
  },
  {
    no: "06",
    title: "Window Tinting",
    text: "Automotive glass tint application for a darker, cleaner look.",
  },
  {
    no: "07",
    title: "Interior Cleaning",
    text: "A proper clean and polish for the parts of the car you spend time in.",
  },
  {
    no: "08",
    title: "Customisation",
    text: "From visual changes to complete automotive makeovers, built to stand out.",
  },
];

const gallery = [
  { src: "/images/trinity_wraps_05_service_collage.jpg", label: "Automotive transformations" },
  { src: "/images/trinity_wraps_01_ktm.jpg", label: "KTM wrap work" },
  { src: "/images/trinity_wraps_03_re.jpg", label: "Royal Enfield styling" },
  { src: "/images/trinity_wraps_02_ktm.jpg", label: "Custom motorcycle finish" },
  { src: "/images/trinity_wraps_04_re.jpg", label: "Custom Royal Enfield" },
  { src: "/images/trinity_wraps_06_yellow_bike.jpg", label: "Workshop customisation" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#">
          <span className="brand-mark">T</span>
          <span>TRINITY <b>WRAPS</b></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="https://wa.me/919573456621" target="_blank" rel="noreferrer">
          WhatsApp <ArrowIcon />
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">VIJAYAWADA · AUTOMOTIVE CUSTOMISATION</p>
          <h1>MAKE YOUR<br /><em>RIDE</em> STAND OUT.</h1>
          <p className="hero-sub">
            Wraps, custom graphics, protection and styling for cars & bikes.
            Built around the way you want your vehicle to look.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://wa.me/919573456621" target="_blank" rel="noreferrer">
              Get a Quote <ArrowIcon />
            </a>
            <a className="button ghost" href="#work">See Our Work</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/trinity_wraps_01_ktm.jpg" alt="Custom KTM motorcycle at Trinity Wraps" />
          <div className="hero-tag">
            <span>01</span>
            <span>WRAPS / CUSTOM / PROTECT</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Services">
        <div>FULL CAR WRAPS</div><span>✦</span>
        <div>BIKE WRAPS</div><span>✦</span>
        <div>CUSTOM GRAPHICS</div><span>✦</span>
        <div>PAINT PROTECTION</div><span>✦</span>
        <div>WINDOW TINT</div><span>✦</span>
      </section>

      <section className="intro">
        <div className="section-kicker">01 / WHAT WE DO</div>
        <div>
          <h2>YOUR VEHICLE.<br /><span>YOUR STYLE.</span></h2>
          <p>
            Trinity Wraps is an automotive wrap and modification studio in
            Vijayawada focused on making cars and bikes look unmistakably yours.
            Choose a subtle finish or go all-in — the work starts with your idea.
          </p>
          <a className="text-link" href="#contact">Start a project <ArrowIcon /></a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div className="section-kicker">02 / SERVICES</div>
          <h2>BUILT TO<br /><em>TRANSFORM.</em></h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.no}>
              <span>{service.no}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading work-heading">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <h2>SEE IT.<br /><em>FEEL IT.</em></h2>
        </div>

        <div className="before-after">
          <div className="ba-image">
            <img src="/images/trinity_wraps_05_service_collage.jpg" alt="Before and after vehicle transformations" />
            <span>BEFORE → AFTER</span>
          </div>
          <div className="ba-copy">
            <p className="eyebrow">THE POINT IS SIMPLE</p>
            <h3>DON&apos;T JUST<br />DRIVE IT.</h3>
            <p>
              Whether it&apos;s a colour change, a custom graphic, protection film
              or a full visual makeover, your vehicle should feel like it belongs to you.
            </p>
            <a className="button ghost light" href="https://wa.me/919573456621" target="_blank" rel="noreferrer">
              Talk to Trinity <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={item.src}>
              <img src={item.src} alt={item.label} />
              <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="location">
        <div className="location-map" aria-label="Trinity Wraps location on Google Maps">
          <iframe
            title="Trinity Wraps, Vijayawada — Google Maps"
            src="https://www.google.com/maps?q=24-29-203C%20BRTS%20Road%2C%20Gulabithota%2C%20Railway%20Colony%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520004&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-badge">TRINITY WRAPS · VIJAYAWADA</div>
        </div>
        <div className="location-copy">
          <div className="section-kicker">04 / FIND US</div>
          <h2>COME SEE<br /><em>THE SHOP.</em></h2>
          <p>24-29-203C, BRTS Road,<br />Gulabithota, Railway Colony,<br />Vijayawada, Andhra Pradesh 520004</p>
          <div className="hours">
            <strong>MON — SAT</strong>
            <span>10:30 AM — 10:00 PM</span>
          </div>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Trinity+Wraps+Vijayawada" target="_blank" rel="noreferrer">
            Open in Google Maps <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top">
          <div className="section-kicker">05 / START A PROJECT</div>
          <h2>READY TO CHANGE<br />THE <em>LOOK?</em></h2>
        </div>
        <div className="contact-bottom">
          <p>Tell us what you&apos;re thinking. We&apos;ll take it from there.</p>
          <div className="contact-actions">
            <a className="button primary" href="https://wa.me/919573456621" target="_blank" rel="noreferrer">WhatsApp Us <ArrowIcon /></a>
            <a className="phone" href="tel:+919573456621">095734 56621</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#"><span className="brand-mark">T</span><span>TRINITY <b>WRAPS</b></span></a>
        <span>VIJAYAWADA · INDIA</span>
        <span>© {new Date().getFullYear()} TRINITY WRAPS</span>
      </footer>
    </main>
  );
}
