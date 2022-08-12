import { AbstractControl, ValidatorFn } from "@angular/forms";

export function LengthValidator(min : number, max : number) : ValidatorFn | null {
  return (control : AbstractControl) => {
    let myValue : string = control.value
    if(myValue == null) return null
    if(myValue.length < min) return {myError : 'string trop court'}
    if(myValue.length > max) return {myError : 'string trop long'}
    return null
  }
}
