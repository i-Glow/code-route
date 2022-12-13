import B22a from "./B22a.svg";
import B40 from "./B40.svg";
import obligation2d from "./obligation2d.webp";
import panneaux_obligation from "./panneaux_obligation.webp";

export const obligation = [
  {
    id: 0,
    text: [
      {
        __html:
          "<p>Ces panneaux sont <strong>ronds</strong> à fond <strong>bleu</strong>. Ils ont pour rôle d'<strong>obliger</strong> un usager à allumer ses feux par exemple ou encore d'imposer une vitesse minimale obligatoire.</p>",
      },
      {
        __html:
          "<p>L'obligation commence à partir du panneau jusqu'à la prochaine intersection ou lorsque l'usager rencontre un panneau de fin.</p>",
      },
    ],
    images: [
      {
        img: B22a,
        desc: "Un panneau rond à fond bleu oblige un usager à appliquer ce qu'indique le panneau",
      },
      {
        img: B40,
        desc: "Un panneau rond à fond bleu barré d'un trait met fin à l'obligation indiquée par le panneau",
      },
    ],
  },
  {
    id: 2,
    text: [{ __html: "<h4>Tous les panneaux</h4>" }],
    images: [{ img: panneaux_obligation }],
  },
];
