import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  hide = true;
 

constructor(
  public loaderService: LoaderService ,
  private router: Router
){}

onClick(){
  this.loaderService.isloading.next(true)

  setTimeout(()=>{

this.loaderService.isloading.next(false)
this.router.navigate(['home'])
  }, 2000)
}
}
