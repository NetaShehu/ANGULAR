import { Component, OnInit } from '@angular/core';
import {TypeService} from "../type.service";

@Component({
  selector: 'app-details-te-tjera',
  templateUrl: './details-te-tjera.component.html',
  styleUrls: ['./details-te-tjera.component.css']
})
export class DetailsTeTjeraComponent implements OnInit {

  public types =[]
  constructor(private _typeService: TypeService) {
  }
  ngOnInit() {
    this._typeService.getType3()
      .subscribe(data => this.types = data);
  }
}

