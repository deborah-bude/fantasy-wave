import React from "react";
import {Button} from "../components/Button";
import {CardLarge} from "../components/CardLarge";
import {Blurb} from "../components/Blurb";
import HomeHeaderImg from "../assets/home-header-image-cosplayeur.jpg"
import HomeBannerImg from "../assets/home-banner-image-cosplayeur.jpg"
export default function Home() {
	return (
		<main>
			<section className="bg-transparent-purple flex flex-wrap justify-center items-center">
				<div className="md:w-6/12 p-16">
					<h1 className="mb-3 text-3xl font-bold">Costumes et Aventures : Plongée dans le Monde du Cosplay</h1>
					<p>Bienvenue dans notre monde où les tissus prennent vie, où les rêves s'incarnent, et où chaque couture raconte une épopée : Explorez, Créez, Enchantez avec Fantasy Weave, l'univers du cosplay en action.</p>
					<Button colors="black" link="/univers-cosplay">En savoir plus</Button>
				</div>
				<div className="md:w-6/12 h-full">
					<img className="h-full object-cover" src={HomeHeaderImg} alt="Cosplayeurs en convention"/>
				</div>
			</section>
			<section>
				<h2>Découvrez l'Univers du Cosplay</h2>
				<p>Le cosplay est un univers large recouvrant plusieurs disciplines et qui a eu des changement au cours des différentes années. Aujourd’hui, tous types de personnes font cette activité et elles ont toutes contribuer à ce qu’est le cosplay.</p>
				<div>
					<Button link="/univers-cosplay">Découvrir le cosplay</Button>
					<Button colors="pink-full" link="/histoire-cosplay">L'histoire du cosplay</Button>
				</div>
			</section>
			<img src={HomeBannerImg} alt=""/>
			<section className="bg-dark-blue text-white">
				<h2>Son premier cosplay</h2>
				<p>Quand on débute, ça peut souvent être compliqué de savoir où commencer et ce qu’il faut faire. On vous propose différentes astuces pour bien débuter.</p>
				<Button colors="white" link="/premier-cosplay">En savoir plus</Button>
			</section>
			<section>
				<img className="md:w-6/12" src="" alt=""/>
				<div className="md:w-6/12">
					<h2>Du Rêve à la Réalité Cosplay : Construisez Votre Costume</h2>
					<p>De la conception à la réalisation, découvrez comment construire vos propres costumes, accessoires, armes etc.</p>
					<div>
						<Button link="/univers-cosplay">Construire premier son cosplay</Button>
						<Button colors="pink-full" link="/histoire-cosplay">Tous les tutoriels</Button>
					</div>
					<div>
						<CardLarge img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" title="Cosplay tutorial 1" content="Apprenez à fabriquer vos propres accessoires de cosplay à l'aide de matériaux courants." tag={["Craft","Mousse", "Peinture", "Aérographe"]}/>
						<CardLarge img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" title="Cosplay tutorial 1" content="Apprenez à fabriquer vos propres accessoires de cosplay à l'aide de matériaux courants." tag={["Craft","Mousse", "Peinture", "Aérographe"]}/>
					</div>
				</div>
			</section>
			<section>
				<div className="md:w-6/12">
					<h2>Cosplay en Scène : Une palette de concours et d'expressions</h2>
					<p>Les concours demandent différentes compétences et ne sont jamais pareils suivant les organisateurs. Retrouvez les différents types de concours possible et quelles compétences il faut pouvoir faire sur son costume.</p>
					<Button link="/concours">Découvrir les concours</Button>
				</div>
				<img className="md:w-6/12" src="" alt=""/>
			</section>
			<section className="bg-dark-blue text-white">
				<h2>Cosplayer n’est pas consentir</h2>
				<p>Surtout il faut avoir une chose en tête si vous voyez quelqu’un porter un cosplay, il faut toujours être respectueux. Il y a une vraie personne derrière le costume. Voici donc quelques règles simple à suivre quand vous croisez un cosplayeur</p>
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
							<Blurb>
								<img src="" alt=""/>
								<p>Tournez votre langue sept fois dans votre bouche avant de faire une remarque déplacée.</p>
							</Blurb>
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