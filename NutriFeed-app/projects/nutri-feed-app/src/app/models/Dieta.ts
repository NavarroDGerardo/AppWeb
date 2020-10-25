export interface Dieta{
  titulo: string;
  description: string;
  img_url: string;
}

export const DIETA = [
  {
      desayuno: "Hot cakes de avena y platano",
      comida: "Carne asada",
      cena: "Pollo asado con verduras",
      colaciones: {
        colacion1: "Fruta",
        colacion2: "Pepino",
        colacion3: "Cacahuates"
      }
  },
  {
    desayuno: "Hot cakes de avena y fresa",
    comida: "Pescado",
    cena: "Pollo asado con verduras",
    colaciones: {
      colacion1: "Fruta",
      colacion2: "Nopales",
      colacion3: "Cacahuates"
    }
  }
]
