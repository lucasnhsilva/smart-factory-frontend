import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { filter, map } from 'rxjs';
import { FactoryNode } from '../../../shared/models/node.interface';

@Injectable({
  providedIn: 'root',
})
export class FactoryNodeService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiUrl = environment.apiUrl;

  loadFactoryNodes(stopType: string = 'LINE') {
    return this.http.get<
      {
        id: number;
        type: string;
        parentId: number;
        name: string;
        description: string;
        children: any[];
      }[]
    >(`${this.apiUrl}/factory-node`);
  }
}
