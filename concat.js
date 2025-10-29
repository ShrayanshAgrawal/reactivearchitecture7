import { of, concat } from "rxjs";

const obs1 = of("A", "B", "C");
const obs2 = of("D", "E", "F");

concat(obs1, obs2).subscribe(val => console.log(val));
