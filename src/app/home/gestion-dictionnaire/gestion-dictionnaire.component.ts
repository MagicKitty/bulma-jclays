import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gestion-dictionnaire',
  templateUrl: './gestion-dictionnaire.component.html',
  styleUrls: ['./gestion-dictionnaire.component.scss']
})
export class GestionDictionnaireComponent implements OnInit {
  @Input() showGestionDictionnaire: boolean;
  @Output() shownGestionDictionnaire: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showGestionDictionnaire = false;
    this.shownGestionDictionnaire.emit(false);
    this.closeModalElement.nativeElement.remove();
  }
}
