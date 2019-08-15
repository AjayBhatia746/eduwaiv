import { HttpClientService } from './../http-client.service';
import { HeroService } from './../hero.service';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  
})
export class SecondComponent implements OnInit {
  academic= new FormGroup({
    clg_name: new FormControl('',[Validators.required]),
    degree: new FormControl('',[Validators.required]),
    from_year: new FormControl('',[Validators.required])
    
  
  }); 
  constructor(private HeroService:HeroService,private httpClientservice:HttpClientService) { }
  error=""
  updateName(){
    if(this.academic.invalid){
      this.error="Please enter valid information"
        setTimeout(()=>{
          this.error=""
        },1500)
      return console.log("Please enter valid information")
    }
      this.httpClientservice.saveUserDetails(this.academic.value,
        '/biodata?clg_name='+this.academic.value.clg_name+'&degree='+this.academic.value.degree+'&from_year='
        +this.academic.value.from_year
      ,'/')
      this.HeroService.logStatusChange(this.academic.value);
    
    
}
  ngOnInit() {
  }

}
