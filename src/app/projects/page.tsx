import ProjectCard from '../../components/ProjectCard';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
}

const FEATURED_REPOS = [
    'nevis-search-api',
    'NeighborhoodWatchIntelligenceService',
    'Yapily-open-banking-api-spring'

];

const DEMO_URLS: Record<string, string> = {
    NeighborhoodWatchIntelligenceService: 'https://neighborhood-watch-intelligence-ser.vercel.app',
};

async function getFeaturedRepos(): Promise<GitHubRepo[]> {
    const username = 'simms11';

    const fetchPromises = FEATURED_REPOS.map(repoName =>
        fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            next: { revalidate: 3600 } // Refresh data every hour
        }).then(res => {
            if (!res.ok) return null;
            return res.json();
        })
    );

    const results = await Promise.all(fetchPromises);

    return results.filter((repo): repo is GitHubRepo => repo !== null);
}

export default async function ProjectsPage() {
    const repos = await getFeaturedRepos();

    return (
        <main className="min-h-screen bg-gray-50 py-24">
            <section className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h1>
                <p className="text-gray-600 mb-12 text-lg">
                    A live look at selected backend architectures and technical experiments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo: GitHubRepo) => (
                        <ProjectCard
                            key={repo.id}
                            name={repo.name}
                            description={repo.description || "No description provided."}
                            html_url={repo.html_url}
                            language={repo.language || "N/A"}
                            demoUrl={DEMO_URLS[repo.name]}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}