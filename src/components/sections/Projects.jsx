export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Gemini Clone</h3>
                    <p className="text-gray-400 mb-4">
                    An exact clone of the Google Gemini AI with seamlessly integrated AI-powered interactions, real time response generation,
                    alongside a dynamic UI with intelligent response rendering and minimal latency
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["React","Gemini 2.5 API","Tailwind CSS"].map((skill,key) =>
                    (<span
                        key={key}
                            className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm bg-blue-500/10 hover:bg-blue-500/25
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                            {skill}
                        </span>)
                    )}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://my-gemini-liard-two.vercel.app/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        <a href="https://github.com/devssneha/MyGemini"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source code</a>
                    </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">WeatherWise</h3>
                    <p className="text-gray-400 mb-4">
                    Fully responsive weather dashboard that shows current weather and 5-day forecast using the OpenWeatherMap API and has integrated React hooks for state management
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["React","Tailwind CSS","API"].map((skill,key) =>
                    (<span
                        key={key}
                            className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm bg-blue-500/10 hover:bg-blue-500/25
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                            {skill}
                        </span>)
                    )}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://weather-wise-rust.vercel.app/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        <a href="https://github.com/devssneha/WeatherWise"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source code</a>
                    </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Quiz App</h3>
                    <p className="text-gray-400 mb-4">
                    Features a multiple choice question system that dynamically collects user responses and provides real-time feedback
                    while also ensuring smooth user experience with optimized state management
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["React","Bootstrap"].map((skill,key) =>
                    (<span
                        key={key}
                            className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm bg-blue-500/10 hover:bg-blue-500/25
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                            {skill}
                        </span>)
                    )}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://lets-quiz-coral.vercel.app/"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        <a href="https://github.com/devssneha/LetsQuiz"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source code</a>
                    </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Code Editor</h3>
                    <p className="text-gray-400 mb-4">
                    Practical and functional live editor created by using frontend technologies to
                    input code in separate panels and see instant updated output side-by-side
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {["HTML","CSS","JavaScript"].map((skill,key) =>
                    (<span
                        key={key}
                            className="bg-blue 500/10 text-blue-500 py-1 px-3 rounded-full text-sm bg-blue-500/10 hover:bg-blue-500/25
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                            {skill}
                        </span>)
                    )}
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://github.com/devssneha/Code-editor"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">Source code</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};