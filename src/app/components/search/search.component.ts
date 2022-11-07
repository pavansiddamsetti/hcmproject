import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  submitted = false;
  searchData:any[]=[];
  errMsg= false;
  memberData:any={};
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [1, 3, 5, 12];
  constructor(private fb:FormBuilder, private userService:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  searchmember=this.fb.group({
    memberid:['',Validators.required],
    firstName: [''],
    lastName: [''],
    physician:[''],
    claimid:['']

  });

  checkValid(){
    
  }

  get f() { return this.searchmember.controls; }

  searchMember(){
   
    if(!this.searchmember.valid){
      this.errMsg=true;
      return;
    }
    this.errMsg=false;
     this.userService.searchMemberData(this.searchmember.value).subscribe(response=>{
       if(response==""){
         alert("data not found")
       }else{
       //alert(JSON.stringify(response));
       this.searchData=response;
       }
     })
  }

  getSelectedRowData(memberdata:any){
    this.memberData=memberdata;
  }

  submitCliam(){
   
    this.router.navigate(['/submitcliam'],{ state: { key: this.memberData.memberid }});
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.searchMember();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.searchMember();
  }
}
