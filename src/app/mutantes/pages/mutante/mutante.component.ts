import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MutantesService } from '../../services/mutantes.service';

@Component({
  selector: 'app-mutante',
  templateUrl: './mutante.component.html',
  styleUrls: ['./mutante.component.css']
})
export class MutanteComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
                private mutantesService: MutantesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id  }) => console.log(id))
  }

}
