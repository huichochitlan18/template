import { ElementRef, Injectable } from '@angular/core';
import { FormsService } from '../../services/utils/forms/forms.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends FormsService{

  constructor() {
    super();
  }

  override init(form: FormGroup, element: ElementRef<HTMLFormElement>): void {
    super.init(form, element);
    // Agregar cualquier lógica específica del formulario aquí
  }
}
