import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checkTime } from '../../interceptors/time/time-interceptor';
import { World } from '../../models/world.model';

@Injectable({
  providedIn: 'root'
})
export class WorldsService {

  private apiUrl = `${environment.API_URL}/api/worlds`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<World[]>(this.apiUrl, { context: checkTime() });
  }

}
