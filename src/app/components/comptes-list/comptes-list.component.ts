import { Component, OnInit } from '@angular/core';
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../domain/compte';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.css']
})
export class ComptesListComponent implements OnInit {

  comptes: Compte[];
  constructor(private _service: ComptesService) { }

  ngOnInit() {
    this._service.getAllComptes().subscribe(
      res => this.comptes = res,
      err => console.log(`Attention erreur: ${err}`)
    );
  }

}
