import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

of("Hi", "Hello")
  .pipe(mergeMap(word => of(`${word} User!`)))
  .subscribe(result => console.log(result));
