import { Component, OnInit } from '@angular/core';
import { ParentDirective } from '../../parent/parent.directive';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent implements OnInit {
  color$;

  constructor(public directive: ParentDirective) {}

  ngOnInit() {
    this.color$ = this.directive.observable$;
  }

  updateColor(value) {
    this.directive.updateColor(value);
  }
}
