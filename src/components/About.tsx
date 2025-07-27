import headshot from "../assets/placeholder.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center pt-24 px-4 overflow-hidden min-h-screen relative"
    >
      {/* Background Effects */}
      {/* <div className="inset-0 bg-gray-900 z-0 absolute"> */}
      <div className="z-0 absolute inset-0">
        <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-3xl absolute top-20 left-10"></div>
        <div className="w-96 h-96 bg-purple-600/5 rounded-full blur-3xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
        <div className="w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl absolute bottom-10 right-10"></div>
        {/* <div className="inset-0 bg-grid-pattern opacity-[0.03] z-0 absolute"></div> */}
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center md:flex-row gap-12 z-10">
        <div className="md:w-1/2 relative">
          <div className="inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full absolute"></div>
          <img
            src={headshot}
            alt="headshot"
            className="rounded-full object-cover w-64 h-64 mx-auto border-4 border-gray-700/50 shadow-lg shadow-black/30 float relative"
          />
        </div>

        <div className="text-center md:w-1/2 md:text-left">
          <p className="inline-block bg-blue-500/10 text-blue-400 text-sm px-4 py-1 rounded-full font-medium mb-4">
            Web Developer
          </p>
          <h1 className="text-4xl sm:text-5xl mb-5">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nick!
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-light mb-6">
            Build with purpose
          </h2>
          <p className="max-w-lg mx-auto md:mx-0 leading-relaxed mbb-8">
            I'm a web developer with 3+ years of experience building
            stunning, responsive, and functional web applications. I specialize
            in font-end development with a strong understanding of React,
            Next.JS, TailwindCSS, and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
