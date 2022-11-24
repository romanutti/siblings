import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[appParent]',
})
export class ParentDirective {
  private color = new BehaviorSubject('#1e90ff');
  public observable$ = this.color.asObservable();

  constructor() {}

  ngOnInit() {}

  updateColor(color) {
    this.color.next(color);
  }
}
