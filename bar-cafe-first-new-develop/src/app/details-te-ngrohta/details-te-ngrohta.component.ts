import { Component, OnInit } from '@angular/core';

import {TypeService} from "../type.service";

@Component({
  selector: 'app-details-te-ngrohta',
  templateUrl: './details-te-ngrohta.component.html',
  styleUrls: ['./details-te-ngrohta.component.css']
})
export class DetailsTeNgrohtaComponent implements OnInit {
public types =[]

  constructor(private _typeService: TypeService) {
  }
ngOnInit() {
   this._typeService.getType1()
     .subscribe(data => this.types = data);
}
}
