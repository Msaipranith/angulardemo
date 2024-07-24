import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log(message)

  }

addSum(a: String, b: String){
   console.log(`a is ${a} b is ${b}`) ;
   return a;
}


}
