import {Injectable} from '@angular/core';
import {Model} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends Model> {

  data = new Array<T>();

  constructor(private http: HttpClient) {
  }

  /**
   * Gets data from all abjects from given type and stocks it in an array
   * @param urlPart
   */
  getAllData(urlPart: string) {
    return this.http.get<T[]>(`${environment.gateway + urlPart}`)
  }

  /**
   * Adds a new object of given type
   * @param m
   * @param urlPart
   */
  addData(m: T, urlPart: string) {
    m.id = 0;
    return this.http.post(`${environment.gateway + urlPart}`, m)
  }

  /**
   * Get data from specified object of given type with ID
   * @param id
   * @param urlPart
   */
  getData(id: number, urlPart: string) {
    return this.http.get<T>(`${environment.gateway + urlPart + id}`)
  }

  /**
   * Update data of specified object of given type with ID
   * @param m
   * @param urlPart
   */
  updateData(m: T, urlPart: string) {
    this.http.put<T>(`${environment.gateway + urlPart + m.id}`, m).subscribe({
      next: () => this.getAllData(urlPart),
      error: err => console.log(`Error while updating data (${urlPart}): ` + err),
      complete: () => console.log(`Update data complete (${urlPart})`)
    })
  }

  /**
   * Removes specified object of given type with ID
   * @param id
   * @param urlPart
   */
  deleteData(id: number, urlPart: string): void {
    this.http.delete<T>(`${environment.gateway + urlPart + id}`).subscribe({
      next: () => this.getAllData(urlPart),
      error: err => console.log(`Error while removing data (${urlPart}): ` + err),
      complete: () => console.log(`Removing data complete (${urlPart})`)
    })
  }
}
