import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroRoute= this.route.snapshot.params
  registroForm= new FormGroup({
    email: new FormControl ('',[Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])
  })


  onSubmit(){
    console.log(this.registroForm.value);

  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get email() {return this.registroForm.get('email')!;}
  get password(){return this.registroForm.get ('password')!;}
}
