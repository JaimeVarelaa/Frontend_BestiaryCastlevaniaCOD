import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const enemy = 'http://localhost:3000/enemy';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrl: './bestiary.component.css',
})
export class BestiaryComponent {
  enemy: any;
  materials: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpClient.get(enemy).subscribe(
      (response: any) => {
        this.enemy = response;
        //console.log(this.enemy);
      },
      (error) => {
        console.log('Error al obtener datos.', error);
      }
    );
  }
}
