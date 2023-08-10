import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message = 'Some Welcome Message'
  name: string | undefined;
  welcomeMessageFromService:string | undefined;

  //ActivatedRoute
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { 

  } 

  // void init() {
    ngOnInit(){
      //COMPILATION ERROR this.message = 5
      console.log(this.message)
      // console.log(this.route.snapshot.params['name'])
      this.name = this.route.snapshot.params['name'];
    }
    
    getWelcomeMessage() {
      console.log(this.service.executeHelloWorldBeanService());
    
      this.service.executeHelloWorldBeanService().subscribe(
        response =>  {
          this.handleSuccessfulResponse(response)
          console.log(JSON.stringify(response));
        }
      );
      
      console.log('last line of getWelcomeMessage')
  
      //console.log("get welcome message");      
    }

    handleSuccessfulResponse(response: HelloWorldBean){
      this.welcomeMessageFromService = response.message
    }    
}
