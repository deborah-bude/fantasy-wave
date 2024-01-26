import React from "react";
import {Button} from "../components/Button";
import {CardLarge} from "../components/CardLarge";
import {Blurb} from "../components/Blurb";
export default function Home() {
    return (
        <main>
            <section>
                <div>
                    <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Costumes et Aventures : Plongée dans le Monde du Cosplay</h1>
                    <p>Bienvenue dans notre monde où les tissus prennent vie, où les rêves s'incarnent, et où chaque couture raconte une épopée : Explorez, Créez, Enchantez avec Fantasy Weave, l'univers du cosplay en action.</p>
                    <Button text="En savoir plus" link="/univers-cosplay"/>
                </div>
                <img src="" alt=""/>
            </section>
            <section>
                <h2>Découvrez l'Univers du Cosplay</h2>
                <p>Le cosplay est un univers large recouvrant plusieurs disciplines et qui a eu des changement au cours des différentes années. Aujourd’hui, tous types de personnes font cette activité et elles ont toutes contribuer à ce qu’est le cosplay.</p>
                <div>
                    <Button text="Découvrir le cosplay" link="/univers-cosplay"/>
                    <Button text="L'histoire du cosplay" link="/histoire-cosplay"/>
                </div>
            </section>
            <img src="" alt=""/>
            <section>
                <h2>Son premier cosplay</h2>
                <p>Quand on débute, ça peut souvent être compliqué de savoir où commencer et ce qu’il faut faire. On vous propose différentes astuces pour bien débuter.</p>
                <Button text="En savoir plus" link="/premier-cosplay"/>
            </section>
            <section>
                <img src="" alt=""/>
                <div>
                    <h2>Du Rêve à la Réalité Cosplay : Construisez Votre Costume</h2>
                    <p>De la conception à la réalisation, découvrez comment construire vos propres costumes, accessoires, armes etc.</p>
                    <div>
                        <Button text="Découvrir le cosplay" link="/univers-cosplay"/>
                        <Button text="L'histoire du cosplay" link="/histoire-cosplay"/>
                    </div>
                    <div>
                        <CardLarge img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" title="Cosplay tutorial 1" content="Apprenez à fabriquer vos propres accessoires de cosplay à l'aide de matériaux courants." tag={["Craft","Mousse", "Peinture", "Aérographe"]}/>
                        <CardLarge img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" title="Cosplay tutorial 1" content="Apprenez à fabriquer vos propres accessoires de cosplay à l'aide de matériaux courants." tag={["Craft","Mousse", "Peinture", "Aérographe"]}/>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Cosplay en Scène : Une palette de concours et d'expressions</h2>
                    <p>Les concours demandent différentes compétences et ne sont jamais pareils suivant les organisateurs. Retrouvez les différents types de concours possible et quelles compétences il faut pouvoir faire sur son costume.</p>
                    <Button text="Découvrir les concours" link="/concours"/>
                </div>
                <img src="" alt=""/>
            </section>
            <section>
                    <h2>Cosplay en Scène : Une palette de concours et d'expressions</h2>
                    <ul>
                        <li>
                            <Blurb content="Demandez toujours avant de prendre une photo et dans des moment convenable"/>
                        </li>
                        <li>
                            <Blurb content="Respectez le droit de cette personne de dire non."/>
                        </li>
                        <li>
                            <Blurb content="Ne touchez pas au cosplay d’une personne sans son autorisation."/>
                        </li>
                        <li>
                            <Blurb content="Tournez votre langue sept fois dans votre bouche avant de faire une remarque déplacée."/>
                        </li>
                        <li>
                            <Blurb content="Gardez vos mains dans vos poches."/>
                        </li>
                        <li>
                            <Blurb content="Ne bousculez pas les autres visiteurs quand vous souhaitez prendre une photo."/>
                        </li>
                    </ul>
            </section>
        </main>
    )
}