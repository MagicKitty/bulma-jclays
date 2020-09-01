import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit {
  @Input() showAjouterProjet: boolean;
  @Output() shownAjouterProjet: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showAjouterProjet = false;
    this.shownAjouterProjet.emit(false);
    this.closeModalElement.nativeElement.remove();
  }
}
