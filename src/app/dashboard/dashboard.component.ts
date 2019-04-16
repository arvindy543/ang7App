import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name: string = ''
  employees = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onkeyUp(event: any) {
    this.name = event.target.value.toLowerCase().trim();
    // this.name = this.name.trim();
  }

  getProfile() {
    console.log(this.name)
    this.httpClient.get(`http://localhost:3000/items/?name=${this.name}`)
      .subscribe(
        (data: any[]) => {
          console.log(data);
          this.employees = data;
          console.log(this.employees);

        }
      )
  }

  postProfile() {
    const jsonData = {
      index: 1,
      index_start_at: 56,
      integer: 28,
      float: 11.7201,
      name: 'Dean',
      surname: 'Ellis',
      fullname: 'Anna Roach',
      email: 'gayle@hunt.gb',
      bool: true
    }
    this.httpClient.post(`http://localhost:3000/items/`,
    {
      index: 1,
      index_start_at: 56
    })
      .subscribe(
        (data: any) => {
          console.log(data)
        }
      )
  }


}
