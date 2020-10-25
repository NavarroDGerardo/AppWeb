import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { RECETA } from '../../../../models/Receta';
import { RecetaService } from '../../../service/receta.service';


@Component({
  selector: 'app-registro-recetas',
  templateUrl: './registro-recetas.component.html',
  styleUrls: ['./registro-recetas.component.scss']
})
export class RegistroRecetasComponent implements OnInit {
  recetas = RECETA;
  modeloReceta = this.formbuild.group(
    {
      titulo: ['', Validators.required],
      description: ['', Validators.required],
      img_url: ["", Validators.required]
    }
  );

  constructor(private formbuild:FormBuilder, private recetaService:RecetaService) { }

  ngOnInit(): void {
  }

  registrarReseta(){

  }

  enviar(){
    console.log(this.modeloReceta.value)
  }

}
