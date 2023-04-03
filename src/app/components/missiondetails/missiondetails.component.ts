import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) {}
}
