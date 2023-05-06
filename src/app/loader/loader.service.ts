import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isloading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public err:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  constructor(
  ) { }


}
