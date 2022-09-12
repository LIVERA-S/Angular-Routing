import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit-comp',
  templateUrl: './fruit-comp.component.html',
  styleUrls: ['./fruit-comp.component.css']
})
export class FruitCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fruits = [
    { name: 'l3ineb', emoji: '🍇' },
    { name: 'btikha', emoji: '🍈' },
    { name: 'della7a', emoji: '🍉' },
    { name: 'limouna', emoji: '🍊' },
    { name: '7ameDa', emoji: '🍋' },
    { name: 'banana', emoji: '🍌' },
    { name: 'ananaSa', emoji: '🍍' },
    { name: 'teffa7a 7emra', emoji: '🍎' },
    { name: 'teffa7a kheDra', emoji: '🍏' },
    { name: 'nGaSa', emoji: '🍐' },
    { name: 'khokha', emoji: '🍑' },
    { name: '7eb lmlouk', emoji: '🍒' },
  ];

}
