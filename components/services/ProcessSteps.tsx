import { process } from "../../data/process";
export default function ProcessSteps(){return <div className="process-grid">{process.map(p=><div key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></div>)}</div>}
