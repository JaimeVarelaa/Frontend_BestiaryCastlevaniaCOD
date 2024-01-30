import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrl: './bestiary.component.css',
})
export class BestiaryComponent {
  beast: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = 'http://localhost:3000/enemy';

    this.httpClient.get(url).subscribe(
      (response: any) => {
        this.beast = response;
        console.log(this.beast);
      },
      (error) => {
        console.log('Error al obtener datos.', error);
      }
    );
  }
}
