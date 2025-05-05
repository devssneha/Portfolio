export const About = () => {
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "PostgreSQL"];
    return (
    <section id="about"
    className="min-h-screen flex items-center justify-center py-20">
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            About me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p:6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((skill,key) => (
                            <span
                            key={key}
                                className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p:6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((skill,key) => (
                            <span
                            key={key}
                                className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                    Education
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.Tech in Information Technology</strong><br/>
                        KIIT University, Bhubaneswar
                        (2022-26)<br/>
                        current CGPA: 8.23
                    </li>
                    <li>
                    <strong>12th- ISC </strong>(2022)<br/>
                        G. D. Birla Centre for Education, Kolkata<br/>
                        percentage: 92.0
                    </li>
                    <li>
                    <strong>10th- ICSE </strong>(2020)<br/>
                        G. D. Birla Centre for Education, Kolkata<br/>
                        percentage: 96.2
                    </li>
                </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
                    Certifications
                </h3>
            <div className="space-y-4 text-gray-300">
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>Published IEEE research paper </strong>
                        at IIPEM 2024 <a href="https://ieeexplore.ieee.org/document/10925748">🔗</a><br/>
                        Title: "A novel LLM-enabled code snippet generation framework"
                    </li>
                    <li>
                    The Complete 2024 <strong>Web Development Bootcamp </strong><br/>
                        Udemy course <a href="https://drive.google.com/file/d/1WdUIqYatbvDJ_00dWYJsal8mHhqCq5OV/view">🔗</a>
                    </li>
                    <li>
                    Java <strong>Data Structures and Algorithms </strong><br/>
                        Udemy course
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    </div>
    </section>
    );
};