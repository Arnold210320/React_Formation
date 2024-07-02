import Photo from "../img/example.webp";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section className="grid grid-flow-col h-[100vh]">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" text-3xl text-slate-50">I'm Arnold Ben</h2>
          <label htmlFor="" className=" text-slate-50 bg-green-400 m-2 p-2">
            Web Developer / Designer / Geek{" "}
          </label>
        </div>
        <div className="">
          <img className="h-[80vh] w-[95%] mt-8" src={Photo} alt="Moi" />
        </div>
      </section>
      <section className="h-[100vh]">
        <About />
      </section>
      <section className="h-[100vh]">
        <Portfolio />
      </section>
      <section className="h-[100vh]">
        <Services />
      </section>
      <section className="h-[100vh]">
        <Blog />
      </section>
      <section className="h-[100vh]">
        <Contact />
      </section>
    </>
  );
}
