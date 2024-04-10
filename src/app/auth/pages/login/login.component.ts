import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import {
  FormBuilder, FormsModule, ReactiveFormsModule, Validators
} from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@barrels/material';
import { FormsService } from '../../../services/utils/forms/forms.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
    MatSelectModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent implements AfterViewInit {

  private _formBuilder = inject(FormBuilder);
  private _formLoginService = inject(FormsService);
  private _authService = inject(AuthService);

  @ViewChild('loginFormElement') loginFormElement!: ElementRef<HTMLFormElement>;
  
  hide = true;
  loginForm = this._formBuilder.group({
    user: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required],
  });

  ngAfterViewInit(): void {
    this._formLoginService.init(this.loginForm!, this.loginFormElement);
  }

  onSubmit(): void {
    if (this._formLoginService.form?.valid) {
      this._authService.login(this._formLoginService.form);
    }
  }

  togglePasswordVisibility($event: any): void {
    $event.preventDefault();
    this.hide = !this.hide;
  }

  focus($event: FocusEvent): void {
    this._formLoginService.onFocusEvent($event);
  }

  onKeyDown($event: KeyboardEvent): void {
    this._formLoginService.onKeyDown($event);
  }

}