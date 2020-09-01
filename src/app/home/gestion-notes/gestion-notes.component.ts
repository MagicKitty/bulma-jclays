import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gestion-notes',
  templateUrl: './gestion-notes.component.html',
  styleUrls: ['./gestion-notes.component.scss']
})
export class GestionNotesComponent implements OnInit {
  @Input() showGestionNotes: boolean;
  @Output() shownGestionNotes: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  editorOptions = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': ['center', 'justify', 'right'] }],
        ['clean'],                                         // remove formatting button
      ]
    };

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showGestionNotes = false;
    this.shownGestionNotes.emit(false);
    this.closeModalElement.nativeElement.remove();
  }
}
