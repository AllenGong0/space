import { fromEvent, scan, throttleTime, Observable, of, map } from "rxjs"

const observable = new Observable((subscriber) => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(4)
    subscriber.next(10)
  }, 2000)
  const unsubscribe = () => {
    console.log('clear')
  }
  return unsubscribe
})

console.log("just before subscribe")
const sub = observable.subscribe({
  next(x) {
    console.log("got value " + x)
  },
  error(err) {
    console.error("something wrong occurred: " + err)
  },
  complete() {
    console.log("done")
  },
})
sub.unsubscribe()
console.log("just after subscribe")
of([1, 2, 3]).pipe(map(x => {
  console.log(x,"---")
  return x
})).subscribe(res => {
  console.log(res)
})