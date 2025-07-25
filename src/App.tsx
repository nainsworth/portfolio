import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-5">
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
      <Analytics />
    </>
  );
}

export default App;
