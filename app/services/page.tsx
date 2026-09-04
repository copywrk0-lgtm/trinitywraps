import PageHero from "../../components/PageHero"; import ServiceList from "../../components/services/ServiceList"; import ServiceCTA from "../../components/services/ServiceCTA";
export const metadata={title:"Services"};
export default function Services(){return <main><PageHero kicker="01 / SERVICES" title="BUILT FOR" accent="TRANSFORMATION." copy="Wraps, graphics, protection and detailing for cars and bikes — all under one roof in Vijayawada."/><ServiceList/><ServiceCTA/></main>}
