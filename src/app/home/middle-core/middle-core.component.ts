import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-middle-core',
  templateUrl: './middle-core.component.html',
  styleUrls: ['./middle-core.component.scss']
})
export class MiddleCoreComponent implements OnInit {
  @Input() showTabs: boolean;
  @Output() shownTabs: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('tab') private tabElement: ElementRef;

  isValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.showTabs = false;
    this.shownTabs.emit(false);
    this.tabElement.nativeElement.remove();
  }
}
