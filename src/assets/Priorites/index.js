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
  {
    img: ponctuelle,
    choices: ["Orange - Rouge - Violet", "Rouge - Orange - Violet"],
    solution: 0,
  },
  { img: prioritaire, choices: ["A - B", "B - A"], solution: 0 },
  { img: rond_point, choices: ["A - B", "B - A"], solution: 0 },
];
