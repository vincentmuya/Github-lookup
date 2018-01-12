import { Injectable } from '@angular/core';
import { Details } from '../details'
@Injectable()
export class GithubService {
getDetails(){
  return Details;
}
  constructor() { }

}
