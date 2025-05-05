export const Home = () => {
    return (<section id="home"
    className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Sneha Sarkar
            </h1>
            <p className="text-gray-400 text-large mb-8 max-w-lg mx-auto">
            I'm a passionate and detail-oriented engineering student with a strong foundation in web development 
            and software engineering. I specialize in building full-stack applications using modern frameworks and  
            love turning ideas into scalable, real-world solutions.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >View Projects</a>
                <a href="https://drive.google.com/file/d/1GliVdBBqv6_xOASjQ0b66U9PFJyHR774/view?usp=sharing"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >My Resume</a>
                <a href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >Contact Me</a>
            </div>
        </div>
    </section>
    );
};