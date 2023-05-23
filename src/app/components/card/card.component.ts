import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from 'src/app/core/models/card-info';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() infoCard!: CardInfo;

  constructor() {}

  ngOnInit(): void {
      
  }
}
