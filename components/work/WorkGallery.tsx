import { gallery } from "../../data/gallery"; import WorkCard from "./WorkCard";
export default function WorkGallery(){return <section className="shell work-grid section-pad compact-top">{gallery.map((item,i)=><WorkCard key={item.src} item={item} index={i} feature={i===0||i===3}/>)}</section>}
