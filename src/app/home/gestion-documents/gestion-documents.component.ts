import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gestion-documents',
  templateUrl: './gestion-documents.component.html',
  styleUrls: ['./gestion-documents.component.scss']
})
export class GestionDocumentsComponent implements OnInit {
  @Input() showGestionDocuments: boolean;
  @Output() shownGestionDocuments: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showGestionDocuments = false;
    this.shownGestionDocuments.emit(false);
    this.closeModalElement.nativeElement.remove();
  }
}
