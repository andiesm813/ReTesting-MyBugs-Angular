import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/service/box-office-revenue-type';
import { Service } from '../static-data/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public getBoxOfficeRevenue(): Observable<BoxOfficeRevenueType[]> {
    return of(Service['BoxOfficeRevenueType']);
  }
}
