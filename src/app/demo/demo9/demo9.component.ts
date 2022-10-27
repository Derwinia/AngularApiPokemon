import { Component, OnInit } from '@angular/core';
import { ConsoapiService } from 'src/app/services/consoapi.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  constructor(
    private service : ConsoapiService
  ) { }

  ngOnInit(): void {
    this.service.getPokemons(0).subscribe({
      next : (data : any) => console.log(data),
      error : (error) => console.log(error)
    })
  }

}
