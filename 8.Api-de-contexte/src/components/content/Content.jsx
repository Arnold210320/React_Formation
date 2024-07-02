import "./Content.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Content() {
    const {dark} = useContext(ThemeContext)
  return (
    <div className="container">
      <h1>Dark and Light mode</h1>
      <h2>You are in {dark ? "Dark" : "Light"} mode</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus
        doloremque culpa, molestias quos fuga? Ullam exercitationem reiciendis
        nobis, temporibus blanditiis doloribus obcaecati delectus perferendis
        amet eveniet sint libero reprehenderit deserunt. Repellat asperiores
        fugiat aliquid enim cum maiores, dolorem dicta quas magnam possimus eos,
        ducimus neque quia ipsum. Tenetur, doloremque et? Soluta, similique
        recusandae. Itaque eligendi maiores saepe vel. Ad error maxime maiores
        non magnam nisi eaque praesentium magni. Error rerum sed reiciendis
        vitae, quia commodi consectetur voluptatibus quibusdam sequi nobis odit
        repudiandae temporibus corrupti explicabo eum aut? Assumenda, cum
        consequatur iste dolorem illo eveniet modi quos accusamus quo blanditiis
        incidunt doloremque, laborum maxime dignissimos tenetur officiis vero?
        Fugiat cumque qui beatae perferendis. Tenetur saepe nihil enim atque qui
        voluptate amet aliquid minus dignissimos. Cupiditate ducimus aut natus
        voluptas totam maiores explicabo officia iusto ratione provident
        doloremque harum minus non nobis quam amet ut corrupti distinctio,
        excepturi eaque modi beatae omnis iste culpa. Amet quibusdam pariatur
        suscipit esse asperiores aliquid, aut fugiat repellat ab incidunt
        consequatur voluptate! Voluptate id fugiat commodi optio fuga facilis
        architecto, dicta tempore ad cumque eos veniam voluptates esse debitis
        delectus voluptatem iure? Velit odio illo mollitia culpa impedit.
        Laudantium rerum dolorem rem et quae consequuntur, eum consectetur esse.
        Quis, magnam ipsam enim dolore officiis perspiciatis pariatur tempora
        quibusdam illum sit aperiam nostrum ratione modi! Facilis itaque iste
        quas, doloribus, est, nihil cum ut totam necessitatibus consectetur
        architecto exercitationem ipsa dolores eligendi quibusdam veritatis esse
        corporis praesentium optio modi enim aspernatur fugit recusandae
        accusamus? Ipsa, recusandae.
      </p>
    </div>
  );
}
