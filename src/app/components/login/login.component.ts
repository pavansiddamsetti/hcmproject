import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login={
    username:"",
    password:""
  }
  loginResp: any={};
  constructor(private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  signIn(user:any){
this.userService.signInUser(user).subscribe(response=>{
this.loginResp=response;
if(this.loginResp.isLogin=="true" && this.loginResp.role=="Admin"){
  this.router.navigate(["/admin"]);
}else if(this.loginResp.isLogin=="true" && this.loginResp.role=="Member"){
this.router.navigate(['/member']);
}else{
  alert("login failed")
 return;
}
},
function(error){

}
)
  }

}
