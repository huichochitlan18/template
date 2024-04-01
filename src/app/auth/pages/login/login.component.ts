import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, inject } from '@angular/core';
import {
  FormBuilder, FormsModule, ReactiveFormsModule, Validators
} from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@barrels/material';
import { FormsService } from '../../../services/utils/forms/forms.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
    MatSelectModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent implements OnInit, AfterViewInit {

  private _formBuilder = inject(FormBuilder);
  private _element = inject(ElementRef);
  private _formService = inject(FormsService);

  hide = true;
  opciones: string[] = ['Opción 1', 'Opción 2'];
  loginForm = this._formBuilder.group({
    user: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this._formService.init(this.loginForm, this._element);
  }
  onSubmit($event: SubmitEvent): void {
    console.log(this._formService.form);
    console.log($event);
  }
  togglePasswordVisibility($event: any): void {
    $event.preventDefault();
    this.hide = !this.hide;
  }

  focus($event: FocusEvent) {
    this._formService.onFocusEvent($event);
  }

  onKeyDown($event: KeyboardEvent) {
    this._formService.onKeyDown($event);
  }

  test2() {
    this.loginForm!.get('user')!.markAsUntouched();
  }


}