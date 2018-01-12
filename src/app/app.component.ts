import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { gitHubDetails} from './lookup-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
