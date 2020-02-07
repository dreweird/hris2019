import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HrmisService } from '@app/_services/hrmis.service';

class Employee {
  Sname: string;
  Fname: string;
  Mname: string;
  Extname: string;
  DoB: string;
  PoB: string;
  sex: string;
  civil_status: string;
  citizenship: string;
  Height: string;
  Weight: string;
  BT: string;
  GSIS_ID: string;
  PAG_IBIG: string;
  PHILHEALTH_ID: string;
  SSS_ID: string;
  R_Address: string;
  R_ZipCode: string;
  R_Tel: string;
  P_Address: string;
  P_ZipCode: string;
  P_Tel: string;
  Email: string;
  Cell: string;
  A_Emp_ID: string;
  TIN: string;
  Photo: string;
  s_surname: string;
  s_firstname: string; 
  s_middlename: string; 
  s_occupation: string; 
  s_employer: string;
  s_tel: string;
  f_surname:string; 
  f_firstname:string; 
  f_middlename:string;
  m_surname:string; 
  m_firstname:string; 
  m_middlename: string;
}

@Component({
  selector: 'app-pds',
  templateUrl: './pds.component.html',
  styleUrls: ['./pds.component.css'],
  providers: [HrmisService]
})
export class PdsComponent implements OnInit {

  isLinear = true;

  show = true;
  myFormGroup: FormGroup;

  Employees: Employee;
  Child: Array<any>;
  Education: Array<any>;
  CSE: Array<any>;
  WE: Array<any>;
  VWI: Array<any>;
  TP: Array<any>;
  Skills: Array<any>;
  NA: Array<any>;
  Membership: Array<any>;
  Question: Array<any>;
  id: number;
 

  onNotify(formGroup: FormGroup): void {
    this.myFormGroup = formGroup;
    console.log(this.myFormGroup.value);
  }


  constructor(private route: ActivatedRoute, private hrmisService: HrmisService) {
   // this.Employees = new Employee();
    this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.hrmisService.getEmployeeDetails(this.id)
       .subscribe(
         (data: any )=> {
           this.Employees = data.data[0];
           this.Child = data.child;
           this.Education = data.education;
           this.CSE = data.cse;
           this.WE = data.we;
           this.VWI = data.vwi;
           this.TP = data.tp;
           this.Skills = data.skills;
           this.NA = data.na;
           this.Membership = data.mem;
         },
         error => console.log("Error HTTP GET Service"),
         () => console.log(this.Employees),
       );
    });
  }

  ngOnInit() {}
 
  saveCSE(value){
    console.log(value);
    this.CSE = value;
  }

  saveWorkExperience(value){
    console.log(value);
    this.WE = value;
  }

  saveVoluntary(value){
    console.log(value);
    this.VWI = value;
  }
  saveTraining(value){
    console.log(value);
    this.TP = value;
  }
  saveSkills(value){
    console.log(value);
    this.Skills = value;
  }
  saveNA(value){
    console.log(value);
    this.NA = value;
  }
  saveMembership(value){
    console.log(value);
    this.Membership = value;
  }

  saveQuestion(value){
    console.log(value);

    
    this.Question = value.value;
  }

  save(){
    console.log(this.myFormGroup.value);
    console.log(this.CSE);
    console.log(this.WE);
    console.log(this.VWI);
    console.log(this.TP);
    console.log(this.Skills);
    console.log(this.NA);
    console.log(this.Membership);
    console.log(this.Question);
  }

}
