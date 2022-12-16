import DangerList from "../Panneaux/Danger";
import IndicationList from "../Panneaux/Indication";
import InterdictionList from "../Panneaux/Interdiction";
import ObligationList from "../Panneaux/Obligation";
import PrioriteList from "../Priorites";

export default {
  panneaux: [
    ...DangerList,
    ...IndicationList,
    ...InterdictionList,
    ...ObligationList,
  ],
  priorites: PrioriteList,
};
