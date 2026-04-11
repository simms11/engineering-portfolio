import cvData from '../../data/cv.json';

export default function SkillsList() {
    const { skills } = cvData;

    return (
        <section className="max-w-3xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                Technical Skills
            </h2>

            <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, itemIndex) => (
                                <span key={itemIndex} className="px-3 py-1 text-sm font-mono bg-blue-50 text-blue-800 rounded-md border border-blue-100">
                  {item}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}