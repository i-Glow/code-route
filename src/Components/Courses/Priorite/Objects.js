import A1 from "../../../assets/Priorites/IMG/A1.png";
import A2 from "../../../assets/Priorites/IMG/A2.png";
import A3 from "../../../assets/Priorites/IMG/A3.png";
import A4 from "../../../assets/Priorites/IMG/A4.png";

export const Items = [
    {
        key:1,
        title:"Les intersections sans panneau",
        description:"​Carrefour Lorsqu'il n'y a pas de signalisation, il faut appliquer la règle de la priorité à droite.",
        src: A1,
        txt:"Les véhicules A et B ont un véhicule à leur droite : le véhicule C est donc prioritaire et passe en premier.Ensuite, le véhicule B n'aura plus personne sur sa droite : il sera prioritaire par rapport au véhicule A.Enfin, la voie est libre pour le véhicule A : il passe.",
    },
    {
        key:2,
        title:"Rond-point",
        description:"Il faut céder le passage à celui qui entre dans le rond-point. Si je suis déjà engagé, je cède le passage à celui qui arrive sur ma droite et si j'entre dans le rond-point, je suis prioritaire. ",
        src: A2,
        txt:"La règle de la priorité à droite s'applique."
    },
    {
        key:3,
        title:"Les intersections avec panneau",
        description:"dans ce cas la priorite est par le signe de panneaux decide ,il faut respecte ",
        src: A3 ,
        txt:"Le véhicule A rencontre un panneau de priorité ponctuelle. Il est donc prioritaire et passe avant le véhicule B. Le véhicule B rencontre un cédez-le-passage. Il laisse donc la priorité au véhicule A."
    },
    {
        key:4,
        title:"Les intersections avec panneau",
        description:null,
        src: A4 ,
        txt:"Le véhicule A est sur une route prioritaire. Il passe donc en premier.Le véhicule B rencontre un cédez-le-passage. Il doit donc laisser la priorité au véhicule A. "
    }
]
/* export default function Mapping(){
    const Items = Render.map((Element)=>{
                    return(
                        <div>
                        <h1>{Element.title}</h1>
                        <p>{Element.description}</p>
                        <img src={Element.src}/>
                        <p> {Element.txt} </p>
                        </div>
                    );
                  })
    return Items;
} */