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
  selectedYear!: string;

  originalMissions: Mission[] = [];
  missions: Mission[] = [];
  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    this.missionService.getMissions().subscribe((missions) => {
      this.missions = missions;
      // Set the original missions array
      this.originalMissions = missions;
    });
  }

  // Filter missions by year
  filterByYear() {
    if (this.selectedYear) {
      console.log(this.selectedYear);
      this.missions = this.missions.filter(
        (mission) => mission.launch_year === this.selectedYear
      );
      console.log(this.missions);
    } else {
      console.log('none');
      this.missions = this.originalMissions;
    }
  }
}
