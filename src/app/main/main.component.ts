import { HttpClientService } from './../http-client.service';
import { Router } from '@angular/router';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators ,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[HeroService]
})
export class MainComponent implements OnInit {
  info= new FormGroup({
    email: new FormControl('',[Validators.required]),
    contact_no: new FormControl('',[Validators.required]),
    git_link: new FormControl('',[Validators.required]),
    linkd_link:new FormControl('',[Validators.required])
  
  });  
  
  constructor(private HeroService:HeroService,
    private router:Router,private httpClientservice:HttpClientService) { 
    //this.HeroService.logStatusChange(this.info.value);
  }
  error=""
  updateName(){
    if(this.info.invalid){
      this.error="Please enter valid information"
        setTimeout(()=>{
          this.error=""
        },1500)
      return console.log("Please enter valid information")
    }
    
    this.httpClientservice.saveUserDetails(this.info.value,'/academic?email='+ this.info.value.email+
    '&contact_no='+this.info.value.contact_no+'+&git_link='+this.info.value.git_link+'+&linkd_link='+this.info.value.linkd_link
    ,'/academic')
    //this.router.navigate(['/academic'])
    this.HeroService.logStatusChange(this.info.value);

}

  ngOnInit() {
 
  }
  
   

}
