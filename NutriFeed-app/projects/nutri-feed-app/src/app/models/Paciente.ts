export interface Paciente {
  nombre: string;
  apellido: string;
  Email: string;
  estado: string;
  nutriologo: string;
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
