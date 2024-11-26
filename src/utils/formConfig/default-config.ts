// Form field settings
// default tag = input
// default pattern = null

import { I_Field } from '../generalTypes';

// label and type are always required
export const defaultFieldConfig: { [key: string]: I_Field } = {
  email: {
    label: 'Email',
    type: 'email',
    pattern: /\S+@\S+\.\S+/,
    fieldErrorMessage: 'Veuillez renseigner votre email',
  },
  password: {
    label: 'Mot de passe',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez renseigner votre mot de passe',
  },
  passwordConfirmation: {
    label: 'Confirmer le mot de passe :',
    type: 'password',
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    fieldErrorMessage: 'Veuillez confirmer votre mot de passe',
  },
  name: {
    label: 'Nom',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre nom',
  },
  age: {
    label: 'Âge',
    type: 'number',
    fieldErrorMessage: 'Veuillez renseigner votre âge',
  },
  tel: {
    label: 'Téléphone',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre numéro de téléphone',
  },
  // textarea
  message: {
    tag: 'textarea',
    label: 'Message',
    type: 'text',
    fieldErrorMessage: 'Veuillez renseigner votre message',
  },
  otherInfos: {
    tag: 'textarea',
    label: 'Autre(s) information(s)',
    type: 'text',
    isRequired: false,
  },

  // radio buttons
  gender: {
    type: 'radio',
    label: 'Genre',
    fieldErrorMessage: 'Veuillez renseigner votre genre',
    options: [
      {
        label: 'Homme',
        value: 'male',
      },
      {
        label: 'Femme',
        value: 'female',
      },
    ],
  },
  // select
  country: {
    type: 'select',
    label: 'Pays',
    defaultValue: 'Choisir votre pays',
    fieldErrorMessage: 'Veuillez renseigner votre pays',
    options: [
      {
        label: 'Angleterre',
        value: 'england',
      },
      {
        label: 'Espagne',
        value: 'spain',
      },
      {
        label: 'France',
        value: 'france',
      },
    ],
  },
  // checkboxes
  foodAllergies: {
    type: 'checkbox',
    label: 'Allergie(s) alimentaire(s)',
    isRequired: false,
    options: [
      {
        label: 'Gluten',
        value: 'gluten',
      },
      {
        label: 'Arachides',
        value: 'peanuts',
      },
      {
        label: 'Lactose',
        value: 'milk',
      },
    ],
  },
};
