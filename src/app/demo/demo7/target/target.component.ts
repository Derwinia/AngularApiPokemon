import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  id : number
  truc : string
  constructor(
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id']
    this.truc = this.ar.snapshot.params['truc']
  }

}
