import cvData from '../../data/cv.json';
import JobCard from './JobCard';

export default function ExperienceList() {
    const { experience } = cvData;

    return (
        <section className="max-w-3xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                Experience
            </h2>

            <div>
                {experience.map((job, index) => (
                    <JobCard
                        key={index}
                        company={job.company}
                        role={job.role}
                        dates={job.dates}
                        location={job.location}
                        tech={job.tech}
                        highlights={job.highlights}
                    />
                ))}
            </div>
        </section>
    );
}