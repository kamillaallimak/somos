import { Component } from '@angular/core';
import { popupService } from '../popup.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  closeResult = '';

  constructor(private popupService: popupService) {}
  /*
  openModal(popupName: string) {
    this.popupService.openModalFunction(popupName);
  }
  */
}
