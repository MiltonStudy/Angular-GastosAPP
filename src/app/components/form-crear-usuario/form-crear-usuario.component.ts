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
  selector: 'app-form-crear-usuario',
  templateUrl: './form-crear-usuario.component.html',
  styleUrls: ['./form-crear-usuario.component.css'],
})
export class FormCrearUsuarioComponent {
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
      .registro(
        this.formRegistro.value.correo,
        this.formRegistro.value.contrasena
      )
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
