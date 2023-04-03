import { MissiondetailsComponent } from './../missiondetails/missiondetails.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { Mission } from 'src/model/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent {
  missions: Mission[] = [];
  constructor(
    private missionService: MissionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.missionService.getMissions().subscribe((missions) => {
      this.missions = missions;
    });
  }

  showDetails(mission: Mission) {
    this.dialog.open(MissiondetailsComponent, {
      height: '400px',
      width: '600px',
      data: mission,
    });
  }
}
