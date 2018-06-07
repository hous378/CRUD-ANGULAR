import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';

@Component({
  selector: 'app-compte-delete',
  templateUrl: './compte-delete.component.html',
  styleUrls: ['./compte-delete.component.css']
})
export class CompteDeleteComponent implements OnInit {
  numCompte: string;
  compte: Compte = {numero: null, prop: null, solde: 0};

  constructor(private _router: ActivatedRoute ,
    private _service: ComptesService , private _routerNav: Router) { }

  ngOnInit() {
  this._router.params.subscribe(
    parameters => {
      this.numCompte = parameters['id'];
      this.getCompteById(this.numCompte);
    },
    error => console.log('Erreur de navigation : ' + error )
  );
  // Init le compte
  }
  getCompteById(id) {
    this._service.getCompteByID(this.numCompte).subscribe(
    resp => this.compte = resp
    );
  }

  annulerDelete() {
    this._routerNav.navigate(['/list']);
    console.log('Annulation de delete et retour vers liste');
  }

  confirmDelete() {
    this._service.deleteCompteById (this.numCompte).subscribe(
      resp => {
        this._routerNav.navigate(['/list']);
        console.log('confirm delete ');
      },
      err => console.log('erreur dans la supression' + err)
      );

  }

}
