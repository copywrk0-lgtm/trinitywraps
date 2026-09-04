import { values } from "../../data/values"; import ValueCard from "./ValueCard";
export default function ValuesGrid(){return <section className="values section-pad"><div className="shell values-grid">{values.map(v=><ValueCard key={v[0]} item={v}/>)}</div></section>}
