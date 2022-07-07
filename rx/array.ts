import { BehaviorSubject, concat, concatAll, concatMap, map, merge, mergeAll, Observable, of, Subject, switchMap } from "rxjs";

const subject$ = new Subject<any>()
const mySubject$ = concat(subject$.pipe(
    switchMap((res) => {
        console.log(res, 'switchMap');
        return res
    }),
    map(res => {
        console.log('map',res)
        return res
    })
))
mySubject$.subscribe(res => {
    console.log(res,'subscribe--')
})
subject$.next([1, 2, 3])
mySubject$.subscribe((res) => {
  console.log(res, "subscribe++")
})