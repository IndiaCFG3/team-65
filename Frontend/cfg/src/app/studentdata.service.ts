import { Injectable } from '@angular/core';
import { Student } from './student';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }
/*
  putStudent(student: Student): Observable<Student> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Student>(this.baseurl + 'student/' , httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }*/
}
