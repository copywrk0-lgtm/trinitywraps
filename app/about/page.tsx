import PageHero from "../../components/PageHero"; import StudioStory from "../../components/about/StudioStory"; import StatsStrip from "../../components/about/StatsStrip"; import ValuesGrid from "../../components/about/ValuesGrid";
export const metadata={title:"About"};
export default function About(){return <main><PageHero kicker="03 / ABOUT TRINITY" title="DETAILS MAKE" accent="THE DIFFERENCE." copy="A Vijayawada automotive customisation studio for people who care how their car or bike looks."/><StudioStory/><StatsStrip/><ValuesGrid/></main>}
