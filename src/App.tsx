import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Analytics />
    </>
  );
}

export default App;
