import logo from "../assets/emergence.png";

export default function Footer() {
  return (
    <footer className="  bottom-0 w-full p-10 bg-[#020817] border-slate-900">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
          <h1 className="text-white text-2xl font-bold ">Emergence</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold flex ">Nos Produits</h1>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold flex ">Le cartel</h1>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold flex ">Suivez-nous</h1>
        </div>
      </div>
      <p className="text-sm text-white text-center ">
        Copyright © 2024 OpenInTech® - All right reserved ©
      </p>
    </footer>
  );
}
