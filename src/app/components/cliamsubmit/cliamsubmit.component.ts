import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-cliamsubmit',
  templateUrl: './cliamsubmit.component.html',
  styleUrls: ['./cliamsubmit.component.css']
})
export class CliamsubmitComponent implements OnInit {
memberData:any={};
memberid:number=0;
maxDate = new Date();
isSubmitted= false;
cliamData= {
  cliamtype:"",
  cliamamt: "",
  remarks:"",
  cliamdate: new Date(),
  memberid: 0
};
  constructor(private fb:FormBuilder,private userService:UserserviceService,private router:Router) { 
    this.memberData =this.router.getCurrentNavigation()?.extras?.state;
		this.memberid=this.memberData.key;
  }

  ngOnInit(): void {
  
  }

  cliamSubmissionForm=this.fb.group({
cliamtype:['',Validators.required],
cliamamt:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
remarks:['',[Validators.required,Validators.maxLength(1000),Validators.pattern('^[a-zA-Z \-\']+')]],
cliamdate:['',Validators.required]
  });

  get f(){
    return this.cliamSubmissionForm.controls;
  }

  get cliamtype(){
    return this.cliamSubmissionForm.get('cliamtype');
  }

  resetFormData(){
    this.cliamSubmissionForm.reset();
  }

  submitCliam(){

this.userService.saveCliamSubmissionData(this.cliamSubmissionForm.value,this.memberid).subscribe(resp=>{
alert(resp.message);
},
function(error){
alert("Something went Wrong")
}
)
  }
  

  getToday(): string {
    return new Date().toISOString().split('T')[0];
 }

}
