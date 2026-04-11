import Image from 'next/image';
import cvData from '../../data/cv.json';

export default function About() {
    const { personal } = cvData;

    return (
        <section className="max-w-4xl mx-auto px-6 py-32">
            <div className="flex flex-col items-center text-center gap-10">

                {/* Image Container - Scaled up significantly */}
                <div className="w-56 h-56 md:w-64 md:h-64 relative">
                    <Image
                        src="/alsahid.jpg"
                        alt={personal.name}
                        fill
                        className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border-4 border-white"
                    />
                </div>

                {/* Text Container - Centered */}
                <div className="max-w-3xl flex flex-col items-center">
                    <h2 className="text-sm font-mono text-blue-600 mb-6 uppercase tracking-widest">
                        Allow me to introduce myself
                    </h2>
                    {/* Increased font size for maximum impact */}
                    <p className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        {personal.intro}
                    </p>
                </div>

            </div>
        </section>
    );
}