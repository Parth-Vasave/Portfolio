const repos = [
  "collective/icalendar",
  "wemake-services/django-modern-rest",
  "Agent-Field/SWE-AF",
  "transmute-app/transmute",
  "leanEthereum/leanSpec",
  "sodascience/metasyn",
  "cubrid-lab/pycubrid",
  "DuarteSantos8/openGym",
];

// Refetched at most once an hour. Set GITHUB_TOKEN to raise the API rate limit.
async function getStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: { stargazers_count?: number } = await res.json();
    return data.stargazers_count ?? null;
  } catch {
    return null;
  }
}

export async function OpenSourceGrid() {
  const stars = await Promise.all(repos.map(getStars));
  const withStars = repos
    .map((repo, i) => ({ repo, stars: stars[i] }))
    .sort((a, b) => (b.stars ?? -1) - (a.stars ?? -1));

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-base">
      {withStars.map(({ repo, stars }) => {
        const [owner, name] = repo.split("/");
        return (
          // Inline flow so the star count follows the name even when it wraps
          <li key={repo} className="min-w-0">
            <a
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline decoration-[var(--border)] underline-offset-[3px] hover:decoration-[var(--text-muted)] transition-colors"
            >
              {/* prefer breaking after the slash on narrow screens */}
              {owner}/<wbr />
              {name}
            </a>
            {stars !== null && (
              <span className="ml-2 whitespace-nowrap font-mono text-base text-yellow-700 dark:text-yellow-400">
                ★ {stars.toLocaleString("en-US")}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
