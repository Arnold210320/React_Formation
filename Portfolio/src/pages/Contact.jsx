import { MapPin, Smartphone, CodeXml } from "lucide-react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col text-center justify-between mr-[10%] ml-[10%]">
        <h2 className=" text-3xl text-slate-50 mb-4 mt-2">CONTACT</h2>
        <div className="grid grid-flow-col gap-8 mb-8">
          <div className="flex flex-col items-center">
            <MapPin color="green" size={60} />
            <span className="text-slate-50">ADDRESS</span>
            <span>Yaounde,Cameroun</span>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone color="green" size={60} />
            <span className="text-slate-50">PHONE NUMBER</span>
            <span>+(237) 657-935-713 </span>
          </div>
          <div className="flex flex-col items-center">
            <CodeXml color="green" size={60} />
            <span className="text-slate-50">WEB SITE</span>
            <span>Edanys.com</span>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}
