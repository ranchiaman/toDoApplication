import { Subject } from 'rxjs';
import { CommonService } from './common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cmServe: CommonService) {

  }

  result: any;


  ngOnInit() {
    this.cmServe.callApi().subscribe((data: any) => {
      this.result = data;
      console.log('data', data);
    });
  }

  title = 'toDoApplication';

  d: number = 10;
  getUserFormData(abc: any) {
    this.cmServe.postData(abc).subscribe(() => {
      this.ngOnInit();
    });
    
  }

  delete(id: any){
    this.cmServe.deleteItem(id.id).subscribe(() => {
      this.ngOnInit();
    });
  }





}


