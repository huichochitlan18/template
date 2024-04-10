import { ElementRef, Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormsService {

  public element: ElementRef<HTMLFormElement> | undefined;
  public form: FormGroup | undefined;
  public keys = signal<string[]>([]);
  public controlName: string = '';

  init(form: FormGroup, element: ElementRef<HTMLFormElement>): void {
    this.form = form;
    this.element = element;
    this.keys.update(() => Object.keys(this.form!.controls));
    this.setInvalidControl();
  }

  onKeyDown($event: KeyboardEvent) {
    const controlName = this.getControlName($event);
    let isValid = this.form!.get(controlName);
    if ($event.key === 'Enter' && isValid?.status == 'INVALID') {
      $event.preventDefault();
      this.focusInvalidControl(controlName);
      return;
    }
    if ($event.key != 'Enter' && isValid?.status == 'VALID') {
      this.focusInvalidControl(controlName);
      return;
    }

    if ($event.key === 'Enter' && isValid?.status == 'VALID') {
      $event.preventDefault();
      this.setInvalidControl();
      this.focusInvalidControl(this.controlName);
      return;
    }
  }

  onFocusEvent($event: FocusEvent) {

    const event = $event as unknown as KeyboardEvent;
    const controlName = this.getControlName(event);
    const control = this.form!.get(controlName);
    if (control?.touched && control?.value == '') {
      this.removeError(controlName);
    }

  }

  private removeError(controlName: string): void {
    this.form!.get(controlName)!.markAsUntouched();
  }

  private getControlName($event: KeyboardEvent): string {
    const target = $event.target as HTMLInputElement;
    const controlName: string = target.getAttribute('formcontrolname') || ''
    return controlName;
  }

  private focusInvalidControl(controlName: string) {
    const invalidControl = this.element?.nativeElement.querySelector<HTMLInputElement>(`[formcontrolname="${controlName}"]`);
    if (invalidControl) {
      invalidControl.focus();
      invalidControl.blur();
      invalidControl.focus();
    }
  }

  private setInvalidControl() {
    this.controlName = this.keys().find((x: string) => this.form?.controls[x].status == 'INVALID')!;
  }

  public static getKeys(form: FormGroup): string[] {
    const keys = Object.keys(form!.controls);
    return keys;
  }

  dispose(): void {
    this.element = undefined;
    this.form = undefined;
  }
}
//simple curiosidad de angular
// const controlName: string = Reflect.get(target.attributes!, 'formcontrolname').value;
// setFocusToControl(controlName: string) {
// const control = this.loginForm.get(controlName);
// if (control) {
//   // console.log(controlName);
//   const inputElement = this._renderer.selectRootElement(control.valueChanges); // Get input element
//   console.log(inputElement);
//   this._renderer.setProperty(inputElement, 'focus', true);
//   console.log(inputElement);
// }
// }