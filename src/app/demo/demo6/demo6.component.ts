import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LengthValidator } from 'src/app/shared/MinLength.validator';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  fg! : FormGroup
  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.builder.group({
      nom : ["toto", [Validators.required, LengthValidator(4,10)]],
      datenaiss : [],
      email : [null, [Validators.required, Validators.email]],
      tel : this.builder.array([])
    })
  }

  getTelArray() : FormArray {
    return this.fg.get("tel") as FormArray
  }

  addTel() {
    this.getTelArray().push(new FormControl(null, [Validators.required, Validators.maxLength(14),
    Validators.pattern("0-9")]))
  }

  validForm() {
    console.log(this.fg.value)
  }

}
