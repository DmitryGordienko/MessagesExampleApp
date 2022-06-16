import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent implements OnInit {
  @Input() label: string = 'Simple Button';

  constructor() { }

  ngOnInit() {
  }

}
