const education = [
  { level: "Bachelor's", what: "Electrical Engineering", where: "Pulchowk Campus, Tribhuvan University", city: "Lalitpur" },
  { level: "+2", what: "Science (3.65 GPA)", where: "Trinity International College", city: "Kathmandu" },
  { level: "SEE", what: "3.85 GPA", where: "East-Pole Higher Secondary School", city: "Kathmandu" },
];

const btn =
  "display inline-block rounded-full border-2 px-5 py-2 text-base font-medium transition-colors";

export default function Homepage() {
  return (
    <div className="page">
      <section className="grid items-center gap-10 py-12 md:grid-cols-[minmax(0,20rem)_1fr] md:py-20">
        <img
          src="/profile.jpg"
          alt="Rohan Simkhada"
          className="aspect-[4/5] w-full max-w-xs rounded-3xl object-cover md:max-w-none"
        />
        <div>
          <h1 className="text-5xl font-extrabold leading-none md:text-7xl">
            Rohan Simkhada
          </h1>
          <p className="mt-4 text-xl" style={{ color: "var(--muted)" }}>
            Electrical Engineering graduate from Kathmandu, Nepal.
          </p>
          <p className="mt-6 max-w-xl">
            I enjoy working across disciplines, from coding and system design to
            research, writing and sustainable technologies. I am driven by
            curiosity, and I like applying what I learn in thoughtful, adaptable
            ways. I think of myself as an evolving learner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/CV_ROHAN_SIMKHADA.pdf" className={btn} style={{ background: "var(--ink)", borderColor: "var(--ink)", color: "#fff" }}>
              Download CV
            </a>
            <a href="https://github.com/Rohan0075" className={btn} style={{ borderColor: "var(--ink)" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rohan-simkhada-9a0b63213/" className={btn} style={{ borderColor: "var(--ink)" }}>
              LinkedIn
            </a>
          </div>
          <svg className="ridge mt-10 block w-full" viewBox="0 0 700 120" aria-hidden="true" preserveAspectRatio="none">
            <path d="M0 110 L70 78 L120 92 L200 42 L250 66 L330 14 L380 50 L440 30 L520 82 L580 60 L650 94 L700 76" />
            <circle cx="330" cy="14" r="6" />
          </svg>
        </div>
      </section>

      <section className="border-t py-12" style={{ borderColor: "var(--line)" }}>
        <h2 className="mb-8 text-3xl font-bold">Education</h2>
        <ol className="border-l-2 pl-6" style={{ borderColor: "var(--ink)" }}>
          {education.map((e) => (
            <li key={e.level} className="relative pb-8 last:pb-0">
              <span
                className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <p className="display text-xl font-bold">
                {e.level}: {e.what}
              </p>
              <p style={{ color: "var(--muted)" }}>
                {e.where}, {e.city}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t py-12" style={{ borderColor: "var(--line)" }}>
        <h2 className="mb-6 text-3xl font-bold">Contact</h2>
        <a
          href="mailto:simkhadarohan82@gmail.com"
          className="display break-all text-2xl font-bold underline decoration-2 underline-offset-4 md:text-4xl"
          style={{ textDecorationColor: "var(--accent)" }}
        >
          simkhadarohan82@gmail.com
        </a>
        <p className="mt-4" style={{ color: "var(--muted)" }}>
          <a href="tel:+9779869375874">+977-9869375874</a>, Kathmandu, Nepal
        </p>
      </section>
    </div>
  );
}
