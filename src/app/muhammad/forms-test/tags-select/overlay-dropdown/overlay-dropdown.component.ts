import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-dropdown',
  templateUrl: './overlay-dropdown.component.html',
  styleUrls: ['./overlay-dropdown.component.css']
})
export class OverlayDropdownComponent implements OnInit {
  compareFn(c1: any, c2: any): boolean {
          return c1 && c2 ? c1.id === c2.id : c1 === c2;
      }

  constructor() { }

  ngOnInit(): void {
  }

}
