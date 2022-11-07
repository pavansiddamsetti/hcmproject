import { AbstractControl, ValidationErrors } from "@angular/forms";

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {

    let value: string = control.value || '';
  
    if (!value) {
      return null
    }
  
    let upperCaseCharacters = /[A-Z]+/g
    if (upperCaseCharacters.test(value) === false) {
      return { passwordStrength: ` password contains atleast one Upper case character` };
    }
  
    let lowerCaseCharacters = /[a-z]+/g
    if (lowerCaseCharacters.test(value) === false) {
      return { passwordStrength: `password contains atleast one lower case character` };
    }
  
  
    let numberCharacters = /[0-9]+/g
    if (numberCharacters.test(value) === false) {
      return { passwordStrength: `password contains atleast one number` };
    }
  
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialCharacters.test(value) === false) {
      return { passwordStrength: `password contains atleast one special character` };
    }
    return null;
  }