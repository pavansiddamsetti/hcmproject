import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/must-match.validator';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-newmember',
  templateUrl: './newmember.component.html',
  styleUrls: ['./newmember.component.css']
})
export class NewmemberComponent implements OnInit {
  //registerForm: FormGroup;
  submitted = false;
  memResp:any={};
  constructor(private fb:FormBuilder,private userService:UserserviceService) { }

  ngOnInit(): void {
  }

  passwordPattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$";
 public  registerForm = this.fb.group({
    
    firstName: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    lastName: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    userName:['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    address: ['',[Validators.required,Validators.maxLength(100)]],
    state: ['',Validators.required],
    city: ['',Validators.required],
    dob: ['']
   
}, {
    validator: MustMatch('password', 'confirmPassword')
});

  get f() { return this.registerForm.controls; }

  get password() {
    return this.registerForm.get('password');
} 

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
registerMember(){
this.submitted = true;

// stop here if form is invalid
if (this.registerForm.invalid) {
    return;
}
this.userService.registerMember(this.registerForm.value).subscribe(response=>{
this.memResp=response;
if(this.memResp.registered=="true"){
  alert(this.memResp.message)
  return;
}else if(this.memResp.registered=="false"){
  alert(this.memResp.message);
}else if(this.memResp.registered=="failed"){
  alert(this.memResp.message);
}
},
function(error){

}
)

}

}
