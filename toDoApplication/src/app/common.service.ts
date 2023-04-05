import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CommonService {
 
 constructor(private http: HttpClient){}

 callApi(){
  //  console.log(this.http.get('http://localhost:3000/task'));
   return this.http.get('http://localhost:3000/task');
 }

 postData(data:any){
   return this.http.post('http://localhost:3000/task', data);
 }

 deleteItem(data:any){
  return this.http.delete('http://localhost:3000/task/'+`${data}`);
 }

}
