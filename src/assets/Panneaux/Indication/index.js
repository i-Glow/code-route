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
  { img: C1a, choices: ["Zone de stationnement","Ralentisseur","Voie affectees","Voie verte"], solution: 0 },
  { img: C6, choices: ["Signalisation par voie","Route a acces reglemente","station d'arret d'autobus","Voie affectees"], solution: 2 },
  { img: C20a, choices: ["Voie verte","Presignalisation d'une impasse au prochain carrefour","Zone de stationnement","Passage pour pietons"], solution: 3 },
  { img: C8, choices: ["Passage pour pieton","Entre d'autoroute","Emplacement d'arret d'urgence","Route a acces reglemente"], solution: 2 },
  { img: C30, choices: ["Ralentisseur","Signalisation par voie","Fin de creneau de depassement","Presignalisation d'une impasse au prochain carrefour"], solution: 2 },
  { img: C207, choices: ["Sortie d'autoroute","Reduction du nombre de voies","Zone de stationnement","Entree d'autoroute"], solution: 3 },
  { img: CE2a, choices: ["Route a acces reglemente","Post d'appel d'urgence","Impasse","Voie affectees"], solution: 1 },
  { img: CE14, choices: ["Circulation dans les deux sens, priorite pour le sens inverse","Installation accessibles aux personnes handicapees","Reduction du nombre de voies","Entree de tunnel"], solution: 1 },
  { img: C12, choices: ["Circulation a sens unique","Reduction du nombre de voies","Ralentisseur","Signalisation par voie"], solution: 0 },
  { img: panneau_bifurcation, choices: ["Zone de stationnement","Presignalisation d'une impasse au prochain carrefour","voie de detresse","Voie verte"], solution: 2 },
];
