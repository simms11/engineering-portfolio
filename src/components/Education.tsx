import cvData from '../../data/cv.json';

export default function Education() {
    const { education } = cvData;

    return (
        <section className="max-w-3xl mx-auto px-6 py-12 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4">
                Education
            </h2>

            <div>
                {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600 font-mono text-sm mt-1">
                            {edu.institution} | {edu.dates}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}