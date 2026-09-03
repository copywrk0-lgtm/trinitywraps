export default function PageHero({kicker,title,accent,copy}:{kicker:string,title:string,accent:string,copy:string}){
 return <section className="page-hero shell"><p className="section-kicker">{kicker}</p><h1>{title}<br/><em>{accent}</em></h1><p className="page-hero-copy">{copy}</p></section>
}
