import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Details } from '../details'
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  constructor(private _http:HttpClient) { }
  getDetails(){
    return this._http.get("")
    .map(result => result);
}
}
