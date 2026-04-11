import cvData from '../../data/cv.json';

export default function Certifications() {
    const { certifications } = cvData;

    return (
        <section className="max-w-3xl mx-auto px-6 py-12 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4">
                Certifications
            </h2>

            <ul className="list-disc list-inside text-gray-700 space-y-2 font-mono text-sm">
                {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </section>
    );
}