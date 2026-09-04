import PageHero from "../../components/PageHero"; import WorkGallery from "../../components/work/WorkGallery"; import WorkCTA from "../../components/work/WorkCTA";
export const metadata={title:"Our Work"};
export default function Work(){return <main><PageHero kicker="02 / OUR WORK" title="BUILT TO BE" accent="NOTICED." copy="A selection of wrap, graphic and customisation work from the Trinity Wraps workshop."/><WorkGallery/><WorkCTA/></main>}
