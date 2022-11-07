import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cliamDetails } from './cliam';
import { MemberDetails } from './member';
import { MemberSearch } from './membersearch';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  BASE_URL="http://54.92.68.67:9393/api/hcm";
  LOGIN_URL="http://54.92.68.67:9494/api/hcm";
  MEMBER_REG_URL="http://54.92.68.67:9595/api/hcm";
  MEMBER_SEARCH="http://54.92.68.67:9595/api/hcm";
  CLIAM_URL="http://54.92.68.67:9595/api/hcm";
  constructor(private http: HttpClient) { }


  registerUser(user: {username: string, password: string ,role:string }):Observable<any>{
    return this.http.post(this.BASE_URL+"/register",user);
      }

      signInUser(user: {username: string, password: string}):Observable<any>{
      return this.http.post(this.LOGIN_URL+"/login",user);
      }

      registerMember(member:MemberDetails):Observable<any>{
          return this.http.post(this.MEMBER_REG_URL+"/memberRegister",member);
      }

      searchMemberData(searchReqData: MemberSearch):Observable<any>{
return this.http.post(this.MEMBER_SEARCH+"/searchmember",searchReqData);
      }

   saveCliamSubmissionData(cliamdata:cliamDetails,memberid: number):Observable<any>{
     cliamdata.memberid=memberid;
return this.http.post(this.CLIAM_URL+"/cliamsubmit",cliamdata);
   }

  }

