import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";
import { FormGroup } from "@angular/forms";

/**
 *  - Como puedo enlazar mi modelo con los campos del template-form?
 *  - Como puedo validar que firstName, lastName y dietaryPreferences no esten vacíos?
 *  - Como puedo mostrar estilos especiales cuando los campos son inválidos?
 *  - Como puedo mostrar mensajes de validacion cuando los campos son inválidos?
 *  - Como puedo mostrar los mensajes de validación solo cuando el campo ha sido visitado o cambiado?
 *  - Como puedo validar que firstName y lastName sean mayores que 3 caracteres y menores que 20 caracteres?
 *  - Como puedo deshabilitar el envio del formulario si hay campos inválidos?
 *  - Como puedo crear mi propio método de validación para evitar que el nombre sea 'Bob'?
 */

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact({
    firstName: 'Pedro',
    lastName: 'Pérez',
    dietaryPreferences: 'Vegetarian',
    isMarried: true,
    ageRange: '18-30'
  });

  dietaryPreferenceOptions = Contact.DietaryPreferences;
  ageRangeOptions = Contact.AgeRanges;

  constructor() { }

  ngOnInit() {
  }

  clearModel() {
    this.model = new Contact({});
  }

  onSubmit(form: FormGroup) {
    if (form.valid)
      console.log("sending data to server: ", this.model);
  }

}
