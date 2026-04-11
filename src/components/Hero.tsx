import cvData from '../../data/cv.json';

export default function Hero() {
    const { personal } = cvData;

    return (
        <section className="max-w-3xl mx-auto px-6 pt-12 pb-8 border-b border-gray-200 mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                {personal.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 font-mono text-sm">
                <span>📍 {personal.location}</span>
                <span>|</span>
                <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition-colors">
                    {personal.email}
                </a>
                <span>|</span>
                <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                    GitHub
                </a>
            </div>

            {}
            <p className="text-base text-gray-700 leading-relaxed font-light">
                {personal.summary}
            </p>
        </section>
    );
}