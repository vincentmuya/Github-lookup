import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Details } from '../details'
import 'rxjs/add/operator/';
@Injectable()
export class GithubService {
getDetails(){
  return Details;
}
  constructor() { }

}
