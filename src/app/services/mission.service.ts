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

  constructor(private http: HttpClient) {}
}


