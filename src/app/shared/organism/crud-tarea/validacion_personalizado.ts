import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

// Validador personalizado para verificar nombres duplicados
export function noDuplicateNamesValidator(formArray: FormArray): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nombreActual = control.value;
    const nombres = formArray.controls.map(
      (asociado) => asociado.get('nombre')?.value
    );

    // Contar cuántas veces aparece el nombre en el FormArray
    const nombreRepetido =
      nombres.filter((nombre) => nombre === nombreActual).length > 1;

    return nombreRepetido ? { duplicateName: true } : null;
  };
}
