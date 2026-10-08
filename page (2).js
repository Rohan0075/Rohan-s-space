export const revalidate = 3600;
export const metadata = { title: "Projects | Rohan Simkhada" };

async function getRepos() {
  try {
    const headers = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      "https://api.github.com/users/Rohan0075/repos?per_page=100&sort=pushed",
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const repos = await res.json();
    return repos.filter((r) => !r.fork && r.name !== "Rohan0075");
  } catch {
    return null;
  }
}

export default async function ProjectPage() {
  const repos = await getRepos();
  return (
    <div className="page py-12">
      <h1 className="text-4xl font-extrabold md:text-5xl">Projects</h1>
      <p className="mt-3 max-w-xl" style={{ color: "var(--muted)" }}>
        Pulled live from my GitHub, newest activity first.
      </p>

      {repos === null && (
        <p className="mt-10">
          GitHub is not responding right now. See everything at{" "}
          <a className="underline" href="https://github.com/Rohan0075">
            github.com/Rohan0075
          </a>
          .
        </p>
      )}
      {repos && repos.length === 0 && (
        <p className="mt-10">No public projects yet. Check back soon.</p>
      )}

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {(repos || []).map((r) => (
          <li key={r.id}>
            <a
              href={r.html_url}
              className="block h-full rounded-2xl border-2 bg-white p-5 transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--line)" }}
            >
              <h2 className="text-xl font-bold">{r.name}</h2>
              <p className="mt-2" style={{ color: "var(--muted)" }}>
                {r.description || "No description yet."}
              </p>
              <p className="display mt-4 text-sm font-medium">
                {r.language || "Mixed"}
                {r.stargazers_count > 0 ? `, ${r.stargazers_count} stars` : ""}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
