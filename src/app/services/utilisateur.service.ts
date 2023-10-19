import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = 'http://127.0.0.1:8000/api/utilisateur';

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUtilisateurById(id: Number): Observable<any> {
    let url = this.apiUrl+'/details/'+id ;
     return this.http.get<any>(url);
   }



  newUtilisateur(user: any) {

    const Observable:  Observable<any> = this.http.post(`${this.apiUrl+'/create'}`, user)
    .pipe(
      tap(
        (data: any) => {
        },
        (error: any) => {
          console.error(error);
        }
      )
    );

  return Observable;

 }

 updateUtilisateur(user: any,id: any) {

  const Observable:  Observable<any> = this.http.put(`${this.apiUrl+'/edit/'+id}`, user)
  .pipe(
    tap(
      (data: any) => {
      },
      (error: any) => {
        console.error(error);
      }
    )
  );

return Observable;

}



deleteUtilisateur(id: any){
  const Observable:  Observable<any> = this.http.delete(`${this.apiUrl}/delete/${id}`)
  .pipe(
    tap(
      (data: any) => {
      },
      (error: any) => {
        console.error(error);
      }
    )
  );

return Observable;

}

GetProduitsCommande(id: any){
        const Observable:  Observable<any> = this.http.get(`${this.apiUrl}/commandes/produits/${id}`)
        .pipe(
          tap(
            (data: any) => {
              // console.log(data);
            },
            (error: any) => {
              console.error(error);
            }
          )
        );

      return Observable;

}


GetTotalCommande(id: any){
  const Observable:  Observable<any> = this.http.get(`${this.apiUrl}/commandes/total/${id}`)
  .pipe(
    tap(
      (data: any) => {
        // console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    )
  );

return Observable;

}


GetCommande(id: any){
  const Observable:  Observable<any> = this.http.get(`http://127.0.0.1:8000/api/call/procedure/nbr_order/${id}` )
  .pipe(
    tap(
      (data: any) => {
        // console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    )
  );

return Observable;

}
  // createServices()

}
