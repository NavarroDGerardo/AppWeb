import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Receta } from '../../../../models/Receta';
import { RecetaService } from '../../../service/receta.service';

@Component({
  selector: 'app-recetas-feed',
  templateUrl: './recetas-feed.component.html',
  styleUrls: ['./recetas-feed.component.scss']
})
export class RecetasFeedComponent implements OnInit {

  recetas: Receta[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private recetaService: RecetaService) {}

  ngOnInit(): void {
    this.recetaService
    .getRecetas()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: any[]) => {
      this.recetas = data;
    });
}
  }


