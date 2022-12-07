import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-test',
  templateUrl: './reactive-forms-test.component.html',
  styleUrls: ['./reactive-forms-test.component.css']
})

export class ReactiveFormsTestComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  selectedCar: String = "Category";
  carsData:any;
  models: Array<any> = []; 
	pickups: Array<any> = [];  
	dropoff: Array<any> = [];  
  form: FormGroup;

  changeCar(newCar: any) { 
		this.models = this.carsData.find((car: any) => car.name == newCar.value).models; 	
    
	}
  changeModel(state: any) { 
		this.pickups = this.carsData
		.find((car: any) => car.name == this.selectedCar).pickup;
		this.dropoff = this.carsData
		.find((car: any) => car.name == this.selectedCar).dropoff;
  
	}
  

  ngOnInit(): void {
    const url:string='../../../../assets/data/cars.json';
    this.http.get(url).subscribe((response)=>{
      this.carsData=response
      
    })
    this.creatForm();
    this.setFormValue();
  }

  save(){
    // this.getFormValue();
    console.log(this.form.value);
  }

  dropoffDate;
  private creatForm() {
    this.form = this.fb.group({
      // name: ['', Validators.required],
      // body: ['', Validators.maxLength(10)],
      clientCar:['', Validators.required],
      clientModel:['', Validators.required],
      clientPickup:['', Validators.required],
      pickupDate:['', Validators.required],
      clientDropoff:['', Validators.required],
      dropoffDate:['', Validators.required],
      clientName:['', Validators.required],
      clientEmail:['', Validators.required],
      clientPhone:['', Validators.required],
      
    })
  }
  model: any;
  getFormValue() {
    this.model = {
      name: this.form.controls.name.value,
      body: this.form.controls.body.value,
    }
  }
  setFormValue(){
   /* this.form.setValue({
      name: 'gggg',
      body: 'hhhh',
    })*/
    // this.form.patchValue({
    //   name: 'gggg',
    // })
    // this.form.controls.name.setValue('ddddddddd')

    console.log(this.model)
  }
  
}
