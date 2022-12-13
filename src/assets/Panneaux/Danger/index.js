import A1a from "./A1a.svg";
import A1c from "./A1c.svg";
import A2b from "./A2b.svg";
import A3 from "./A3.svg";
import A3b from "./A3b.svg";
import A4 from "./A4.svg";
import A13a from "./A13a.svg";
import A13b from "./A13b.svg";
import A15a1 from "./A15a1.svg";
import A16 from "./A16.svg";
import A17 from "./A17.svg";
import A18 from "./A18.svg";
import A19 from "./A19.svg";
import ic_cdp from "./ic_cdp.svg";
import ic_pad from "./ic_pad.svg";
import ic_prio_ponc from "./ic_prio_ponc.svg";
import ic_stop from "./ic_stop.svg";
import panneau_travaux from "./panneau_travaux.svg";
import panneaux_dangers from "./panneaux_danger.webp";

const danger = [
  {
    id: 0,
    text: [
      {
        __html: `<p>Comme on a deja vu, <strong>les panneaux de danger</strong> ont une forme <strong>triangulaire</strong>. Ces panneaux ont aussi une <strong>couleur</strong>.</p>`,
      },
      {
        __html: `<p>Celui-ci possède <strong>généralement</strong> un fond <strong>blanc</strong> avec un liseré rouge ainsi qu'un pictogramme précisant la nature du <strong>danger</strong>.</p>`,
      },
      {
        __html: `<p>Les panneaux de danger à fond <strong>jaune sont des panneaux temporaires</strong>, souvent placés à proximité d'un chantier. Ces panneaux peuvent être des panneaux de danger existant auxquels on ajoute un caractère temporaire, ou bien des panneaux de danger uniquement temporaire (exemple : le panneau indiquant la présence de travaux).</p>`,
      },
    ],
    images: [
      { img: A4, desc: "Fond blanc : panneau permanent" },
      { img: panneau_travaux, desc: "Fond jaune: panneau temporaire" },
    ],
  },
  {
    id: 1,
    text: [
      {
        __html: "<h3>Les panneaux d'infrastructure</h3>",
      },
    ],
    images: [
      { img: A13b, desc: "Passage piéton" },
      { img: A2b, desc: "Dos-d'âne" },
      { img: A17, desc: "Croisement avec feux tricolores" },
    ],
  },
  {
    id: 2,
    text: [
      {
        __html:
          "<h3>Les panneaux de rencontre d'autres usagers ou d'animaux</h3>",
      },
    ],
    images: [
      {
        img: A13a,
        desc: "Passage d'écoliers. Ce panneau est placé à proximité des écoles ou des terrains de jeux.",
      },
      { img: A15a1, desc: "Passage d'animaux domestiques" },
    ],
  },
  {
    id: 3,
    text: [{ __html: "<h3>Les panneaux de profil de route</h3>" }],
    images: [
      { img: A1a, desc: "Virage à droite" },
      { img: A3, desc: "Rétrécissement de chaussée" },
      {
        img: A16,
        desc: "Descente dangereuse. Ce panneau indique une pente de 10%.",
      },
      { img: A18, desc: "Circulation dans les 2 sens" },
      { img: A3b, desc: "Rétrécissement de chaussée par la gauche" },
      { img: A1c, desc: "Série de virages dont le premire est à droite" },
    ],
  },
  {
    id: 4,
    text: [{ __html: "<h3>Les panneaux de conditions</h3>" }],
    images: [
      { img: A4, desc: "Chaussé glissante" },
      { img: A19, desc: "Chute de pierres" },
    ],
  },
  {
    id: 5,
    text: [{ __html: `<strong>Revision et plus de panneaux</strong>` }],
    images: [{ img: panneaux_dangers }],
  },
];

export { danger };
