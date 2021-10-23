import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reactive-Form-validations';

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  createReactiveForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.pattern(/^[A-Z0-9]/i),
    ]),
    Description: new FormControl('', [Validators.maxLength(500)]),
    Team: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.pattern(/^[A-Z0-9]/i),
    ]),
    ProductOwner: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.pattern(/^[A-Z0-9]/i),
    ]),
  });

  onSubmit() {
    this.toastr.success('Form created successfully');
  }
}
