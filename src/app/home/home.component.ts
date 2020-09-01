import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {timer} from 'rxjs';
import { IntervenantsComponent } from './intervenants/intervenants.component';

const CLOSING_TIME = 10_000;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  login = 'Nicolas';

  showIntervenants: boolean = false;
  showGestionDocuments: boolean = false;
  showGestionNotes: boolean = false;
  showGestionDictionnaire: boolean = false;
  showAjouterProjet: boolean = false;
  showTabs: boolean = false;

  private $timer = timer(CLOSING_TIME).subscribe(() =>  this.close());
  @ViewChild('closeModal') private closeModalElement: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  displayIntervenants(): void {
    this.showIntervenants = !this.showIntervenants;
  }

  displayGestionDocuments(): void {
    this.showGestionDocuments = !this.showGestionDocuments;
  }

  displayGestionNotes(): void {
    this.showGestionNotes = !this.showGestionNotes;
  }

  displayGestionDictionnaire(): void {
    this.showGestionDictionnaire = !this.showGestionDictionnaire;
  }

  displayAjouterProjet(): void {
    this.showAjouterProjet = !this.showAjouterProjet;
  }

  addTab(): void {
    this.showTabs = !this.showTabs;
  }

  isLocalStorageNotificationClosed(): boolean {
    return localStorage.getItem('notificationClosed') === 'true';
  }

  close(): void {
    if (!this.isLocalStorageNotificationClosed()) {
      this.closeModalElement.nativeElement.remove();
      this.$timer.unsubscribe();
      localStorage.setItem('notificationClosed', 'true');
    }
  }
}
