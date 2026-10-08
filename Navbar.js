"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/Project", label: "Projects" },
  { href: "/Books", label: "Books" },
  { href: "/Movies", label: "Movies" },
  { href: "/Blogs", label: "Blogs" },
  { href: "/Collections", label: "Collections" },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <header
      className="sticky top-0 z-10 border-b backdrop-blur"
      style={{ background: "rgba(243,245,249,0.9)", borderColor: "var(--line)" }}
    >
      <nav
        aria-label="Main"
        className="page flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3"
      >
        <Link href="/" className="display text-lg font-extrabold">
          Rohan Simkhada
        </Link>
        <ul className="display flex flex-wrap gap-x-5 gap-y-1 text-base font-medium">
          {links.map((l) => {
            const active =
              l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className="hover:underline underline-offset-4 decoration-2"
                  style={{
                    textDecorationColor: "var(--accent)",
                    textDecorationLine: active ? "underline" : undefined,
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
