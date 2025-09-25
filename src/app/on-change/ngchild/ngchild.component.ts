import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngchild',
  templateUrl: './ngchild.component.html',
  styleUrls: ['./ngchild.component.scss'],
})
export class NgchildComponent implements OnChanges {
  @Input() data: any;
  @Input() value: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes);

    // if (changes['data']) {
    //   const prev = changes['data'].previousValue;
    //   const curr = changes['data'].currentValue;
    //   console.log(`Data changed from "${prev}" :to "${curr}"`);
    // }
  }
}
