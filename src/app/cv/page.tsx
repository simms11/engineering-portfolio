import Hero from '../../components/Hero';
import ExperienceList from '../../components/ExperienceList';
import SkillsList from '../../components/SkillsList';
import Education from '../../components/Education';

export default function CVPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 py-12">
            <Hero />
            <SkillsList />
            <ExperienceList />
            <Education />
        </main>
    );
}