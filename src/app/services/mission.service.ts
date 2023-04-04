import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from 'src/model/mission';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  getMissions() {
    return this.http.get<Mission[]>(this.apiUrl);
  }

  getFilteredMissions(
    launchSuccess?: boolean,
    landSuccess?: boolean,
    launchYear?: string
  ) {
    let url = this.apiUrl;

    if (launchSuccess) {
      url = url + `?launch_success=${launchSuccess}`;
    }
    if (landSuccess) {
      url = url + `&land_success=${landSuccess}`;
    }
    if (launchYear) {
      url = url + `&launch_year=${launchYear}`;
    }

    return this.http.get<Mission[]>(url);
  }

  constructor(private http: HttpClient) {}
}
