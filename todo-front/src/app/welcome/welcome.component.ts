import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name: string | undefined;
  welcomeMessageFromService: string | undefined;

  //ActivatedRoute
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {

  }

  // void init() {
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => {
        this.handleSuccessfulResponse(response)
      },
      error => {
        this.handleErrorResponse(error)
      }
    );

    console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceParam(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }


  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMessageFromService = response.message;
    console.log(JSON.stringify(response));
  }
}
