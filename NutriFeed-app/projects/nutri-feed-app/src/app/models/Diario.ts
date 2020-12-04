export interface Diario {
  _id: string;
  descripcion_desayuno: string;
  descripcion_comida: string;
  descripcion_cena: string;
  image_desayuno: string;
  image_comida: string;
  image_cena: string;
}

export const DIARIO = [
  {
    desayuno: 'Hot cakes de avena y platano',
    comida: 'Carne asada',
    cena: 'Pollo asado con verduras',
    imgDesayuno: '../../../../../assets/img/AvenaZanahoria.png',
    imgComida: '../../../../../assets/img/TortillaEspinaca.png',
    imgCena: '../../../../../assets/img/AvenaLeche.png',
  },
  {
    desayuno: 'Hot cakes de avena y fresa',
    comida: 'Pescado',
    cena: 'Pollo asado con verduras',
    imgDesayuno: '../../../../../assets/img/AvenaZanahoria.png',
    imgComida: '../../../../../assets/img/TortillaEspinaca.png',
    imgCena: '../../../../../assets/img/AvenaLeche.png',
  },
];
