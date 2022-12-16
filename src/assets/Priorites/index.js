import cas_particuliers from "./IMG/A1.png";
import ponctuelle from "./IMG/A2.png";
import prioritaire from "./IMG/A3.png";
import rond_point from "./IMG/A4.png";

export default [
  {
    img: cas_particuliers,
    choices: ["C - B - A", "A - B - C", "A - C - B", "B - C - A"],
    solution: 0,
  },
  { img: ponctuelle, choices: [], solution: 1 },
  { img: prioritaire, choices: [], solution: 1 },
  { img: rond_point, choices: [], solution: 1 },
];
