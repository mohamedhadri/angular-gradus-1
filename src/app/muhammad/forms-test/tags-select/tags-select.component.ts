import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {Overlay} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayDropdownComponent } from './overlay-dropdown/overlay-dropdown.component';
// class Tag{
//   id: number;
//   tagName: string;
//   selected: boolean;
// }


@Component({
  selector: 'app-tags-select',
  templateUrl: './tags-select.component.html',
  styleUrls: ['./tags-select.component.css']
})

export class TagsSelectComponent implements OnInit {
  // tags: Tag[];
  // tagCtrl: UntypedFormControl = new UntypedFormControl([]);
   isMenuOpen = false;
  
constructor(private overlay:Overlay){}
  
  open():void{
    const overlayRef=this.overlay.create();
    const dropdownOverlay = new ComponentPortal(OverlayDropdownComponent);
    overlayRef.attach(dropdownOverlay)
    
  }

  backdropClick(){
    // this.isMenuOpen = !this.isMenuOpen
  }
  

  ngOnInit(): void {
  }
}
