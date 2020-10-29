import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  chuckJokes: string = environment.chuckJokes;

  constructor(private http: HttpClient) { }

  public getMessage(): Observable<any> {
    return this.http.get(this.chuckJokes);
  }
}
