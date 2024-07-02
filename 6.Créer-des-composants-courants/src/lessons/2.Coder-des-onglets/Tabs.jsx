const tabsData = [
  {
    txt: " t Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam adipisci saepe sit reiciendis sint voluptatibus fuga officiis quod eaque.",
  },
  {
    txt: " a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio provident voluptatem ipsam exercitationem doloribus! Totam ab nihil ipsum voluptas aperiam beatae expedita quae facilis ducimus. Asperiores officia, suscipit accusantium nisi nam modi, rerum nostrum esse enim earum dolor architecto quos?",
  },
  {
    txt: " b Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo a quibusdam voluptatem praesentium repellendus ab reiciendis iusto! Quod hic aliquam, voluptates expedita iure eius corrupti incidunt quos unde doloremque earum, eligendi sequi, nam praesentium. Eius voluptates ullam est omnis similique tempora enim. Aut necessitatibus nesciunt et voluptatibus excepturi. Magni totam modi, similique atque recusandae blanditiis ut necessitatibus explicabo qui?",
  },
];
import { useState } from "react";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="max-w-xl min-h-[250px] mx-auto rounded border border-slate-400">
      <div className="flex divide-x divide-slate-700">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`w-full p-4 ${
              activeTab === index + 1
                ? "bg-slate-700 text-slate-100"
                : "bg-slate-200 text-slate-900 hover:bg-slate-300"
            }`}
            onClick={() => setActiveTab(index + 1)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
      <div className=" grid p-4 text-slate-100">
        <p>{tabsData[activeTab - 1].txt}</p>
      </div>
    </div>
  );
}
