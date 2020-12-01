export interface Horario {
  _id: string;
  nombre: string;
  apellido: string;
  hora: string;
  fecha: string;
  correoUsuario: string;
}

export const HORARIO = [
  {
    nombre: 'Ana',
    apellido: 'Gómez',
    horario: '12:00',
  },
  {
    nombre: 'Sofia',
    apellido: 'Herrera',
    horario: '13:00',
  },
  {
    nombre: 'Mario',
    apellido: 'Quintero',
    horario: '14:00',
  },
  {
    nombre: 'Elena',
    apellido: 'Nuéz',
    horario: '15:00',
  },
  {
    nombre: 'Victor',
    apellido: 'Ruiz',
    horario: '17:00',
  },
  {
    nombre: 'Antonio',
    apellido: 'Fragoso',
    horario: '18:00',
  },
];
