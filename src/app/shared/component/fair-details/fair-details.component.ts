import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../model/fair';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
@Input() getDetails!: Ifair;
  constructor() { }

  ngOnInit(): void {
  }

}
