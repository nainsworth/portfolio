const About = () => {
  return (
    <section id="about">
        {/* Background Effects */}
      {/* <div className="inset-0 bg-gray-900 z-0 absolute"> */}
      <div>
        <div className="w-64 h-64 bg-blue-600/10 rounded-full blur-3xl absolute top-20 left-10"></div>
        <div className="w-96 h-96 bg-purple-600/10 rounded-full blur-3xl absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
        <div className="w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl absolute bottom-10 right-10"></div>
        {/* <div className="inset-0 bg-grid-pattern opacity-[0.03] z-0 absolute"></div> */}
      </div>

      <div className="flex flex-col gap-5 place-items-center min-h-screen self-center justify-center pb-50">
        <h1 className="text-7xl">Portfolio</h1>
        <h2 className="text-4xl">Coming Soon</h2>
        <p className="text-xl mt-8">
          Meanwhile, please checkout my{" "}
          <a
            className="text-blue-500 hover:text-white hover:no-underline underline"
            href="https://github.com/nainsworth"
            target="_blank"
          >
            github
          </a>
          !
        </p>
      </div>
    </section>
  );
};

export default About;
