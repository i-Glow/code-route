import B3 from "./B3.svg";
import B6d from "./B6d.svg";
import B9a from "./B9a.svg";
import B11 from "./B11.svg";
import B12 from "./B12.svg";
import B14_50 from "./B14_50.svg";
import B14_110 from "./B14_110.svg";
import B15 from "./B15.svg";
import B31 from "./B31.svg";
import B34 from "./B34.svg";
import panneau_stationnement_1_15 from "./panneau_stationnement_1_15.svg";
import panneau_stationnement_16_31 from "./panneau_stationnement_16_31.svg";
import panneaux_interdiction from "./panneaux_interdiction.webp";
import panneaux_interdictions_superposes from "./panneaux_interdictions_superposes.webp";

export const interdiction = [
  {
    id: 0,
    text: [
      {
        __html:
          "<p>Les panneaux d'<strong>interdiction</strong> sont des panneaux <strong>ronds</strong> à fond <strong>blanc</strong>, <strong>entourés</strong> d'une <strong>bande rouge</strong>. Ils sont ainsi facilement distinguables des autres panneaux de signalisation tels que les panneaux d'obligation (rond à fond bleu) ou les panneaux de danger (triangulaires). La nature de l'interdiction est souvent indiquée par un <strong>pictogramme</strong>.</p>",
      },
      {
        __html:
          "<p>Ils peuvent <strong>interdire l'accès aux véhicules</strong> affectés au transport de marchandises, aux véhicules transportant des marchandises dangereuses <strong>ou</strong> encore imposer une <strong>limitation de vitesse</strong>.</p>",
      },
      {
        __html:
          "<p>L'interdiction commence à hauteur du panneau et se termine à la prochaine intersection ou lorsque l'usager rencontre un panneau de fin d'interdiction.</p>",
      },
    ],
    images: [
      {
        img: B3,
        desc: "Un panneau rond à fond blanc et contour rouge indique une interdiction",
      },
      {
        img: B34,
        desc: "Un panneau rond à fond blanc et barré par un trait noir met fin à l'interdiction indiquée par le panneau",
      },
    ],
  },
  {
    id: 1,
    text: [
      {
        __html:
          "Les panneaux de limitation de vitesse font partie des panneaux d'interdiction. Pour la sécurité routière des usagers, ils interdisent à tout véhicule, sauf mention contraire, de rouler à une vitesse supérieure de celle indiquée par le panneau.",
      },
    ],
    images: [
      { img: B14_50, desc: "Vitesse limitée 50 à km/h" },
      { img: B14_110, desc: "Vitesse limitée 110 à km/h" },
    ],
  },
  {
    id: 2,
    text: [
      {
        __html:
          "<p>Les panneaux d'interdiction de stationnement ont la particularité d'avoir un fond bleu avec un liseré rouge. Cette signalétique particulière est propre aux panneaux de stationnement.</p>",
      },
    ],
    images: [
      { img: B6d, desc: "Interdiction de s'arrêter et de stationner" },
      {
        img: panneau_stationnement_1_15,
        desc: "Stationnement interdit du 1er au 15 du mois du côté du panneau",
      },
      {
        img: panneau_stationnement_16_31,
        desc: "Stationnement interdit du 16 à la fin du mois du côté du panneau",
      },
    ],
  },
  {
    id: 3,
    text: [
      {
        __html:
          "<p style='font-size: 18px'>Au Code de la route, si deux panneaux d'interdiction sont superposés, chaque panneau se lit séparément. Il n'y a pas de lien entre ces deux panneaux de signalisation. Ici, la circulation est interdite aux cyclistes et la limitation de vitesse est de 110 km/h pour tous les usagers.</p>",
      },
    ],
    images: [
      {
        img: panneaux_interdictions_superposes,
        desc: "Accès interdit aux cycles, Vitesse limitée 110 à km/h",
      },
    ],
  },
  {
    id: 4,
    text: [
      {
        __html:
          "<h4>La planche de panneau ci-dessous rassemble les panneaux d'interdiction.</h4>",
      },
    ],
    images: [{ img: panneaux_interdiction }],
  },
];

export default [
  { img: B3, choices: ["Interdiction de depasser","vitesse limitee a 110km/h","Acces interdit aux vehicules dont la largeur depasse la valeur indique","Cedez le passage pour le sens inverse",], solution: 0 },
  { img: B6d, choices: ["Cedez le passage pour le sens inverse","Acces interdit aux vehicules dont la largeur depasse la valeur indique","Signaux sonores interdits","Arret et stationnement interdits",], solution: 3 },
  { img: B9a, choices: ["vitesse limitee a 50km/h","Stationnement interdit du 1er au 15 du mois du cote du panneau","Arret interdit aux pietons","Fin de toutes les interdictions precedemment signales",], solution: 2 },
  { img: B11, choices: ["Fin de toutes les interdictions precedemment signales","Interdiction de depasser","Acces interdit aux vehicules dont la largeur depasse la valeur indique","Interdiction de fair demi-tour",], solution: 2 },
  { img: B12, choices: ["Sens interdit","Acces interdit aux vehicules dont la largeur depasse la valeur indique","Signaux sonores interdits","Arret interdit aux pietons",], solution: 1 },
  { img: B14_50, choices: ["Stationnement interdit du 1er au 15 du mois du cote du panneau","Interdiction de fair demi-tour","Interdiction de depasser","vitesse limitee a 50km/h",], solution: 3 },
  { img: B14_110, choices: ["vitesse limitee a 110km/h","Fin d'interdiction de depasser","Arret et stationnement interdits","Signaux sonores interdits",], solution: 0 },
  { img: B15, choices: ["Arret interdit aux pietons","Sens interdit","Cedez le passage pour le sens inverse","Interdiction de fair demi-tour",], solution: 2 },
  { img: B31, choices: ["Sens interdit","Fin d'interdiction de depasser","Signaux sonores interdits","Fin de toutes les interdictions precedemment signales",], solution: 3 },
  { img: B34, choices: ["Fin d'interdiction de depasser","Interdiction de depasser","vitesse limitee a 50km/h","Acces interdit aux vehicules dont la largeur depasse la valeur indique",], solution: 0 },
  { img: panneau_stationnement_1_15, choices: ["Acces interdit aux vehicules dont la largeur depasse la valeur indique","Stationnement interdit du 1er au 15 du mois du cote du panneau","vitesse limitee a 110km/h","Arret et stationnement interdits",], solution: 1 }
];
