import { HttpClientService } from './../http-client.service';
import { HeroService } from './../hero.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  bdata=new FormGroup({
    first_name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    last_name:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required])  
    });


    error=""
  constructor(private HeroService:HeroService,private router:Router,private httpClientservice:HttpClientService) {}
  
  updateName(){
    if(this.bdata.invalid){
      this.error="Please enter valid information"
        setTimeout(()=>{
          this.error=""
        },1500)
    return console.log("Please enter valid information") 
    } 
    this.httpClientservice.saveUserDetails(this.bdata.value,'/info?first_name='+this.bdata.value.first_name+'&last_name='
    +this.bdata.value.last_name+'&location='+this.bdata.value.location+'&gender='+this.bdata.value.gender,'/info'                
    )
    this.HeroService.logStatusChange(this.bdata.value);
    }

ngOnInit() {
  }

}
