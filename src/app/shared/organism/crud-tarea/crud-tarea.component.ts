import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { noDuplicateNamesValidator } from './validacion_personalizado';
import { v4 as uuidv4 } from 'uuid';
import { FormService } from 'src/app/core/service/form.service';
import { Router, RouterModule } from '@angular/router';
import { Asociado, Tarea } from 'src/app/core/model/tarea.intefaces';

@Component({
  selector: 'app-crud-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, RouterModule],
  templateUrl: './crud-tarea.component.html',
  styleUrls: ['./crud-tarea.component.scss'],
})
export class CrudTareaComponent implements OnInit {
  /* variables */
  private fb = inject(FormBuilder);
  private formService = inject(FormService);
  private route = inject(Router);
  @Input() id: string | null = null;

  /* variables del formulario */
  public myForm: FormGroup = this.fb.group({
    id: [uuidv4()],
    nombre: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    estado: [false],
    asociados: this.fb.array([]),
  });

  ngOnInit() {
    if (this.id) {
      this.formService.getTaskById(this.id).subscribe({
        next: (tarea) => {
          // Resetear los valores básicos del formulario
          this.myForm.reset(tarea);
          this.myForm.setControl(
            'asociados',
            this.fb.array(tarea.asociados || [])
          );
          // Limpiar y volver a llenar el FormArray de asociados
          const asociadosArray = this.myForm.get('asociados') as FormArray;
          asociadosArray.clear(); // Limpiar el FormArray antes de llenarlo

          tarea.asociados.forEach((asociado: any) => {
            asociadosArray.push(
              this.fb.group({
                nombre: asociado.nombre,
                edad: asociado.edad,
                habilidades: this.fb.array(asociado.habilidades || []),
              })
            );
          });
        },
      });
    }
  }

  // Función para crear un FormGroup para cada asociado
  createAsociadoarray(asociado: Asociado): FormGroup {
    return this.fb.group({
      nombre: [asociado.nombre],
      edad: [asociado.edad],
      habilidades: this.fb.array(
        asociado.habilidades.map((habilidad: any) => new FormControl(habilidad))
      ),
    });
  }

  // Función para crear un 'asociado'
  createAsociado(): FormGroup {
    const asociadosFormArray = this.myForm.get('asociados') as FormArray;
    return this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          noDuplicateNamesValidator(asociadosFormArray),
        ],
      ],
      edad: ['', [Validators.required, Validators.min(18)]],
      habilidades: this.fb.array([this.createHabilidad()], [this.minItems(1)]), // Creamos el array de habilidades
    });
  }

  // Validador personalizado para verificar mínimo de items en un FormArray
  minItems(min: number) {
    return (control: AbstractControl) => {
      const formArray = control as FormArray;
      return formArray.length >= min
        ? null
        : { minItems: { required: min, actual: formArray.length } };
    };
  }

  // Función para agregar un asociado al FormArray
  addAsociado(): void {
    (this.myForm.get('asociados') as FormArray).push(this.createAsociado());
  }

  // Función para eliminar un asociado del FormArray
  removeAsociado(index: number): void {
    (this.myForm.get('asociados') as FormArray).removeAt(index);
  }

  // Función para crear una habilidad
  createHabilidad(): FormGroup {
    return this.fb.group({
      habilidad: ['', Validators.required],
    });
  }

  // Función para agregar una habilidad a un asociado
  addHabilidad(asociadoIndex: number): void {
    const habilidades = (this.myForm.get('asociados') as FormArray)
      .at(asociadoIndex)
      .get('habilidades') as FormArray;
    habilidades.push(this.createHabilidad());
  }

  // Función para eliminar una habilidad de un asociado
  removeHabilidad(asociadoIndex: number, habilidadIndex: number): void {
    const habilidades = (this.myForm.get('asociados') as FormArray)
      .at(asociadoIndex)
      .get('habilidades') as FormArray;
    habilidades.removeAt(habilidadIndex);
  }

  // Getter para obtener el FormArray de 'habilidades' de un asociado
  getHabilidades(asociadoIndex: number): FormArray {
    return (this.myForm.get('asociados') as FormArray)
      .at(asociadoIndex)
      .get('habilidades') as FormArray;
  }

  // Obtener el FormArray de asociados
  get asociados(): FormArray {
    return this.myForm.get('asociados') as FormArray;
  }

  /* validar campos de formulario */
  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  isValidFieldArray(
    formArray: FormArray,
    field: string,
    index: number
  ): boolean | null {
    const fieldarray = formArray.at(index).get(field) as FormArray;
    return fieldarray?.invalid && (fieldarray?.touched || fieldarray?.dirty);
  }

  getFieldErrorArray(
    formArray: FormArray,
    field: string,
    index: number
  ): string | null {
    const fieldarray = formArray.at(index).get(field) as FormArray;
    if (fieldarray?.errors) {
      if (fieldarray.errors['required']) {
        return `${field} es requerido`;
      }
      if (fieldarray.errors['minlength']) {
        return `${field} debe tener al menos ${fieldarray.errors['minlength'].requiredLength} caracteres`;
      }
      if (fieldarray.errors['min']) {
        return `debe ser mayor de edad`;
      }
      if (fieldarray.errors['duplicateName']) {
        return 'nombre ya existe';
      }
      // Otros posibles errores
    }
    return null;
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }
    return null;
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.id) {
      this.formService.updateForm(this.id, this.myForm.value).subscribe({
        next: (tarea) => {
          this.route.navigate(['/home/list'])
        }
      })
      return;
    }
    this.formService.saveForm(this.myForm.value).subscribe({
      next: (tarea) => {
        console.log('cargado con exito', tarea);
        this.route.navigate(['/home/list'])
      },
      error: () => {
        console.log('no se logro el objetivo');
      },
    });
  }
}
