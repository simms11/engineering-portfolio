interface JobCardProps {
    company: string;
    role: string;
    dates: string;
    location: string;
    tech: string[];
    highlights: string[];
}

export default function JobCard({ company, role, dates, location, tech, highlights }: JobCardProps) {
    return (
        <div className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                    {role} <span className="text-blue-600">@ {company}</span>
                </h3>
                <span className="text-sm font-mono text-gray-500">
          {dates} | {location}
        </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded-md border border-gray-200">
            {skill}
          </span>
                ))}
            </div>

            <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2 leading-relaxed">
                {highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
}