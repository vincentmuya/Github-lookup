import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { gitHubDetails} from './lookup-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gitName = '';
    gitHubDetails;
    name = '';
    id = '';
    url = '';
    avatar_url = '';

  constructor (private http:Http) {}

    searchGitName() {
      this.http.get('https://api.github.com/users/' +this.gitName).subscribe(
        (res:Response)=>{
          const gitHubDetails1 =res.json();
          console.log(gitHubDetails1)
          this.gitHubDetails= gitHubDetails1;


        }
      )

    }

}
