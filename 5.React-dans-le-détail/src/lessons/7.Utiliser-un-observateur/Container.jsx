import "./Container.css";
import { useEffect, useRef, useState } from "react";

export default function Container() {
  const newsletter = useRef();

  useEffect(() => {
    const observeur = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        newsletter.current.classList.add("active");
        observeur.unobserve(newsletter.current);
      }
    });

    observeur.observe(newsletter.current);

    return () => {
      observeur.unobserve(newsletter.current);
    };
  }, []);

  return (
    <div className="container">
      <h1>Utiliser un observateur</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet maxime
        odio veritatis dignissimos, sit maiores mollitia aspernatur qui
        consequuntur corrupti ipsum nam error ipsam impedit nulla inventore
        explicabo minus! Minima in numquam eveniet quam asperiores error
        distinctio animi maxime dolorem velit. Recusandae et eius rem,
        consectetur commodi, enim sunt ullam labore velit asperiores dolores
        voluptates suscipit doloremque, laboriosam quo? Placeat error numquam
        porro odit nihil dignissimos iste inventore hic, optio quas, aspernatur,
        repellat et! Reprehenderit mollitia odio amet voluptate molestiae quis
        placeat deleniti cumque sunt eum quia, dicta numquam! Dignissimos,
        veniam! Vitae beatae reiciendis aspernatur sapiente aliquid cupiditate
        accusantium ad, nostrum natus delectus cum repellendus dolor nobis nisi
        incidunt. Magni, esse dolorum! Vitae architecto asperiores, cupiditate
        quo voluptatem optio temporibus minus! Aliquid assumenda provident
        libero debitis accusamus sequi beatae nam enim corrupti deleniti.
        Dignissimos voluptas suscipit veritatis esse, soluta assumenda.
        Quibusdam veniam id placeat eligendi, vel odit aliquam perferendis
        repellendus dolore magnam harum commodi, dolorum tenetur voluptatibus
        provident numquam assumenda excepturi natus minima accusamus! Quas rem
        atque distinctio, eligendi quaerat aliquid iure eius magnam saepe modi
        perferendis eos eum sunt laborum id odit, dicta voluptatum eaque aliquam
        repellat consequuntur vero explicabo, facilis quo? Aperiam rerum
        asperiores tempore magni repellat hic, eum reiciendis quis sapiente
        voluptate, dolorum corrupti natus! Ad sed veniam rerum! A quasi error
        totam vel iste praesentium consequatur facere nemo? Quia saepe, velit
        architecto repellendus inventore ipsum enim asperiores impedit. Culpa,
        quasi sunt voluptatum, ad nisi mollitia magnam, repellendus nemo ipsum
        quas esse harum amet reiciendis. Quis voluptatem rerum cupiditate
        doloremque reprehenderit eaque, dolore ipsum animi nobis numquam labore.
        Non excepturi culpa, quaerat ducimus, dolore nihil autem, id explicabo
        neque exercitationem quos? Totam fugiat nihil excepturi vero veritatis
        amet aliquid in exercitationem repellendus officia nostrum, magni omnis
        error labore temporibus distinctio incidunt sequi debitis nisi nobis
        adipisci. Ex alias vitae eveniet soluta ab, unde voluptates corrupti
        explicabo? Nihil alias officiis aperiam, incidunt totam unde asperiores
        repellat vero accusamus saepe quia earum vel voluptatem, assumenda
        repellendus molestias sit dolorum itaque. Sapiente temporibus cum esse,
        quia mollitia nemo possimus asperiores aliquam quisquam! Amet id sit
        veniam fugit reiciendis voluptate obcaecati, culpa labore incidunt
        repellat fuga officiis nulla sapiente. Pariatur sint aperiam accusamus,
        voluptate qui doloribus porro inventore et architecto iusto animi,
        doloremque incidunt. Omnis aliquam delectus labore eius reprehenderit
        autem accusantium reiciendis! Sint nostrum natus molestiae corrupti
        consequatur enim, atque perferendis vero dignissimos praesentium, nulla
        adipisci illum, accusantium reiciendis excepturi! Enim corporis iusto
        quibusdam dolor, quasi magnam distinctio neque! Esse nesciunt nulla iste
        totam sunt? Nihil est perferendis accusamus atque ab architecto nisi
        repudiandae deleniti alias. Facere, dolor? Molestiae quisquam eaque
        facere quos nisi sit totam, sapiente vitae velit enim consectetur
        aspernatur, necessitatibus voluptate aliquam dicta accusamus dolorem,
        voluptatum quia fugiat facilis nemo vero omnis! Ducimus, necessitatibus?
        Dicta, magnam veniam eligendi consectetur sint quam consequuntur
        dignissimos tenetur rerum, velit ut beatae? Consectetur nemo possimus
        culpa iusto ducimus consequatur nisi facilis numquam! Omnis odio a
        dolor, ipsa odit cupiditate ipsum aperiam assumenda quisquam quo facere
        harum dolore, numquam nemo sequi iste?
      </p>
      <div ref={newsletter} className="newsletter">
        <h2>Observe element</h2>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam
        aliquam officiis minima a? Quaerat maxime ipsam accusamus, numquam illo
        odit, ex, harum eius provident odio voluptates inventore animi ipsa
        obcaecati nemo nesciunt iste aspernatur illum. Quam rerum voluptatibus
        totam, voluptas nulla ut explicabo fugiat rem qui fuga obcaecati impedit
        aliquam, temporibus aperiam doloremque quas veniam? Adipisci unde
        repellat quae beatae provident maxime incidunt aspernatur natus, vitae
        quam in pariatur necessitatibus nulla molestias. Quas, ipsum? Iste eaque
        amet odio numquam laudantium? Minus a delectus, laborum fuga vitae vero
        ad, animi commodi earum dolorum, repudiandae iure est optio dolores
        numquam error laboriosam! Ad iure officia magni sunt ullam ipsa sed quam
        dolorum. Omnis voluptates natus qui earum eveniet explicabo veniam
        quaerat optio eligendi, aperiam necessitatibus vero inventore hic ab
        dicta dignissimos et eos officiis. Explicabo ullam enim facilis expedita
        vero cum, dolor, alias rem magnam voluptas nulla sit tempora nostrum
        odio repellendus quibusdam esse rerum et voluptatem debitis quae. Illo
        voluptatibus nesciunt ad fugiat cupiditate quis perspiciatis voluptas id
        facilis repellendus corporis, distinctio consequuntur veritatis dolore
        adipisci perferendis itaque incidunt sed inventore quas? Consequatur
        sint consectetur esse accusamus, placeat maxime recusandae unde odit ex
        provident facere facilis inventore praesentium culpa tenetur! Sequi,
        laborum illo at quos ipsam doloribus fuga? Inventore omnis magni
        sapiente? Reiciendis, quibusdam ullam cum laborum explicabo consequatur
        autem natus? Eaque placeat saepe illum aspernatur possimus, qui mollitia
        corporis enim maiores dolore ipsam magnam consequatur inventore quasi
        quas tenetur fuga, doloremque error tempore consequuntur, sit earum
        totam. Laborum architecto deleniti eveniet ex blanditiis doloremque
        nesciunt fuga officia quibusdam tenetur veritatis excepturi sunt dolorum
        voluptates culpa ad, rerum tempore, temporibus distinctio nostrum
        reiciendis. A ea sed odio quidem atque? Omnis eligendi ipsa a iure
        sapiente iusto explicabo quam nisi voluptas quasi architecto rerum
        quibusdam quisquam voluptatibus fuga, deserunt odio nobis doloribus quia
        harum autem facere cupiditate ullam nemo! Recusandae accusamus ullam,
        voluptate obcaecati magnam fugiat perferendis adipisci minus qui facilis
        exercitationem quisquam, dolores voluptatum, error eveniet quod. Laborum
        facere incidunt distinctio cum blanditiis aliquam nam perferendis eius
        placeat, illum repellat, natus tempore sed voluptates, commodi magnam
        voluptatibus quos nisi architecto tempora accusamus quia! Placeat,
        voluptas? Illum delectus fuga ipsum voluptate numquam eaque sit
        obcaecati similique eius doloremque dolor, corrupti ad fugit atque minus
        ab dicta quis quasi nihil laborum provident, sed ipsam necessitatibus?
        Tempora cupiditate nam voluptas odio. Autem fugit rerum porro velit
        quaerat tempore distinctio, necessitatibus soluta voluptas. Explicabo
        quae iste eligendi veniam amet possimus laboriosam, ducimus numquam
        expedita? Eveniet ipsum quae soluta eligendi tempora facilis pariatur
        adipisci animi cupiditate fuga incidunt, quia voluptatem in quasi
        recusandae mollitia iste rerum repellendus, ea sequi. Itaque eos alias a
        facilis fugit laudantium veniam nisi accusamus quas vitae. Enim dolor
        laborum at praesentium quibusdam ex delectus corporis eum sunt pariatur
        quidem voluptatum in quos amet veritatis asperiores a ipsa impedit nam
        et nobis atque perspiciatis, explicabo sit? Ex, assumenda corporis
        officia dolor qui porro illo fuga laboriosam harum aliquam iure autem
        corrupti itaque quasi illum. Nihil blanditiis omnis nulla. Consequuntur,
        sed quibusdam.
      </p>
    </div>
  );
}
