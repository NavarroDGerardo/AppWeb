import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-header-paciente',
  templateUrl: './header-paciente.component.html',
  styleUrls: ['./header-paciente.component.scss'],
})
export class HeaderPacienteComponent implements OnInit {
  constructor(private auth:AuthService,@Inject(DOCUMENT)private doc: Document) { }

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout({returnTo: this.doc.location.origin})
  }
}
