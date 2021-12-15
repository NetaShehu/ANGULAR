import { Component, OnInit } from '@angular/core';
import {TypeService} from "../type.service";

@Component({
  selector: 'app-details-te-ftohta',
  templateUrl: './details-te-ftohta.component.html',
  styleUrls: ['./details-te-ftohta.component.css']
})
export class DetailsTeFtohtaComponent implements OnInit {

  public types =[]
  constructor(private _typeService: TypeService) {
  }
  ngOnInit() {
    this._typeService.getType2()
      .subscribe(data => this.types = data);
  }
  }

