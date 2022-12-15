import C1a from "./C1a.svg";
import C6 from "./C6.svg";
import C8 from "./C8.svg";
import C12 from "./C12.svg";
import C20a from "./C20a.svg";
import C30 from "./C30.svg";
import C207 from "./C207.svg";
import CE2a from "./CE2a.svg";
import CE14 from "./CE14.svg";
import panneau_bifurcation from "./Panneau-bifurcation-autoroute.png";
import panneaux_indication from "./panneaux_indication.webp";
import panneaux_services from "./panneaux_services.webp";

const indication = [
  {
    id: 0,
    text: [
      {
        __html: `<p>Un panneau d'<strong>indication</strong> est un panneau <strong>carré</strong> à fond <strong>bleu ou blanc, entouré d'un liseré blanc ou bleu</strong>. Il existe différents types de panneaux d'indications.</p>`,
      },
      {
        __html:
          "<p>Les panneaux qui <strong>donnent</strong> une <strong>information</strong> aux usagers de la route comme la réduction du nombre de voies, la présence d'une impasse ou encore le type de priorité lors d'un croisement difficile. Ces panneaux sont généralement à fond bleu liseré de blanc.</p>",
      },
      {
        __html:
          "<p>Les <strong>panneaux de services</strong> qui indiquent la <strong>présence d'infrastructures mise à disposition des usagers de la route</strong> comme un emplacement pour pique-nique. Ces panneaux sont généralement à fond blanc liseré de bleu.</p>",
      },
    ],
    images: [
      { img: C30, desc: `Fond bleu : information concernant la conduite` },
      {
        img: CE2a,
        desc: `Fond blanc avec un contour bleu : information concernant les installations`,
      },
    ],
  },
  {
    id: 1,
    text: [{ __html: `<h3>Les differents panneaux</h3>` }],
    images: [{ img: panneaux_indication }],
  },
];

export { indication };

export default [
  { img: C1a, choices: [], solution: 2 },
  { img: C6, choices: [], solution: 2 },
  { img: C20a, choices: [], solution: 2 },
  { img: C8, choices: [], solution: 2 },
  { img: C30, choices: [], solution: 2 },
  { img: C207, choices: [], solution: 2 },
  { img: CE2a, choices: [], solution: 2 },
  { img: CE14, choices: [], solution: 2 },
  { img: C12, choices: [], solution: 2 },
  { img: panneau_bifurcation, choices: [], solution: 2 },
];
