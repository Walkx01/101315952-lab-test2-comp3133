import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mission } from 'src/model/mission';
import { MissiondetailsComponent } from '../missiondetails/missiondetails.component';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
})
export class MissionComponent {
  @Input() mission!: Mission;
  @Output() toggleDetails: EventEmitter<Mission> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(mission: Mission) {
    const dialogRef = this.dialog.open(MissiondetailsComponent, {
      data: mission,
    });
  }
}
