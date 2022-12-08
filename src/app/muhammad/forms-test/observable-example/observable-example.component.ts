import { Component, OnInit } from '@angular/core';
import { Observable ,connect,map, filter,of,tap,merge} from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {

  myObservable= new Observable((observer:any)=>{
    console.log('observable starts')
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
      })


        source$ = of(1, 2, 3, 4, 5).pipe(
        tap({
          subscribe: () => console.log('subscription started'),
          next: n => console.log(`source emitted ${ n }`)
        })
      );


  constructor() { }

  ngOnInit(): void {

    this.myObservable.subscribe((val)=>{
      console.log(val)
    })

    this.source$.pipe(
      // Notice in here we're merging 3 subscriptions to `shared$`.
      connect(shared$ => merge(
        shared$.pipe(map(n => `all ${ n }`)),
        shared$.pipe(filter(n => n % 2 === 0), map(n => `even ${ n }`)),
        shared$.pipe(filter(n => n % 2 === 1), map(n => `odd ${ n }`))
      ))
    )
    .subscribe(console.log);


    

  }

}
