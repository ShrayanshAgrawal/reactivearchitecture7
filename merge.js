import { of, merge } from "rxjs";
import { delay } from "rxjs/operators";

const obs1 = of("A", "B", "C").pipe(delay(500));
const obs2 = of("1", "2", "3").pipe(delay(300));

merge(obs1, obs2).subscribe(value => console.log(value));
