interface ProjectCardProps {
    name: string;
    description: string;
    html_url: string;
    language: string;
}

export default function ProjectCard({ name, description, html_url, language }: ProjectCardProps) {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-600 hover:underline mb-2">
                    <a href={html_url} target="_blank" rel="noreferrer">{name}</a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description || "No description provided."}
                </p>
            </div>

            {language && (
                <div className="mt-auto pt-4">
          <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
            ● {language}
          </span>
                </div>
            )}
        </div>
    );
}