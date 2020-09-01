import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intervenants',
  templateUrl: './intervenants.component.html',
  styleUrls: ['./intervenants.component.scss']
})
export class IntervenantsComponent implements OnInit {
  @Input() showIntervenants: boolean;
  @Output() shownIntervenants: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showIntervenants = false;
    this.shownIntervenants.emit(false);
    this.closeModalElement.nativeElement.remove();
  }

}
