import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formRegistro: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formRegistro = this.formBuilder.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.userService
      .login(this.formRegistro.value.correo, this.formRegistro.value.contrasena)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch((error) => alert('Datos Incorrectos'));
  }
}
