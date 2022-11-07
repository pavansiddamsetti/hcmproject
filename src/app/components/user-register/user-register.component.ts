import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user={
    username:"",
    password:"",
    role:""
  }

  resp:any={};
  constructor(private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(user:any){
    this.userService.registerUser(this.user).subscribe(response=>{
      
    
    this.resp=response;
      if(this.resp.isexisted=="true"){
        alert(this.resp.message);
return;
      }else{
        alert(this.resp.message);
        this.router.navigate(['']);
      }
     },
     function(error){
      alert("something went wrong "+JSON.stringify(error));
     }
     );
    }

}
