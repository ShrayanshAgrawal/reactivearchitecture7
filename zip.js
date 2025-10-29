import { of, zip } from "rxjs";

const letters = of("A", "B", "C");
const numbers = of(1, 2, 3);

zip(letters, numbers).subscribe(([l, n]) => console.log(l + n));
