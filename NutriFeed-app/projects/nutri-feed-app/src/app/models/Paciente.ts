export interface Paciente {
  _id: string;
  nombre: string;
  apellido: string;
  correo: string;
  estado: string;
  edad: string;
  ciudad: string;
  altura: string;
  peso_actual: string;
}

export const PACIENTE = [
  {
    nombre: 'Diego Gerardo',
    apellido: 'Navarro Gonzalez',
    Email: 'A013123@itesm.mx',
    estado: 'bajo de peso',
    nutriologo: 'Estefania Fuentes Avalos',
  },
  {
    nombre: 'Carlos Alberto',
    apellido: 'Maldonado Viveros',
    Email: 'A013123@itesm.mx',
    estado: 'normal',
    nutriologo: 'Veronica Madeleine Alvarado',
  },
  {
    nombre: 'Jimena',
    apellido: 'Bermudez Bautista',
    Email: 'A013123@itesm.mx',
    estado: 'normal',
    nutriologo: 'Stephania Martínez Magallón',
  },
  {
    nombre: 'Nancy Elizabeth',
    apellido: 'Medina Ramírez',
    Email: 'A013123@itesm.mx',
    estado: 'normal',
    nutriologo: 'Ana Karen Noyola Mondragón',
  },
];
