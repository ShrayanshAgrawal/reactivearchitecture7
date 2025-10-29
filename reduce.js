import { of } from "rxjs";
import { reduce } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(reduce((acc, curr) => acc + curr, 0))
  .subscribe(sum => console.log("Sum:", sum));
