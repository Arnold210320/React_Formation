import Photo from "../img/example.webp";
import TableSkill from "../components/TableSkill";

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
        <div className="flex flex-col text-center items-center">
          <h2 className=" text-3xl text-slate-50 mb-4">ABOUT ME</h2>
          <p className="text-slate-50">
            Bonjour, je m'appelle Arnold Ben et je suis un développeur passionné
            par les technologies du web. Depuis 3 années, je m'épanouis dans ce
            domaine en constante évolution, repoussant sans cesse mes limites
            pour offrir des solutions innovantes et performantes.je mets mon
            expertise au service de mes clients. Rigoureux, créatif et
            adaptable, je conçois des applications web sur mesure, intègre des
            systèmes complexes et optimise les performances. Au-delà de mes
            compétences techniques, je suis également doté d'un esprit d'équipe
            et d'une excellente communication. Je collabore étroitement avec mes
            clients pour comprendre leurs besoins et leur proposer les
            meilleures solutions. Parallèlement, je m'implique dans des projets
            personnels et des communautés en ligne, partageant mes connaissances
            lors d'ateliers et de conférences. Convaincu que le développement
            web offre de nombreuses opportunités passionnantes, je m'efforce de
            rester à la pointe des dernières technologies et méthodologies.
            N'hésitez pas à me contacter pour en apprendre davantage sur mes
            réalisations et mes services.
          </p>
          <TableSkill />
        </div>
      </section>
    </>
  );
}
