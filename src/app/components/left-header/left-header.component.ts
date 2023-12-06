import { Component, Input } from '@angular/core';

@Component({
  selector: 'left-header',
  templateUrl: './left-header.component.html',
  styleUrls: ['./left-header.component.scss']
})
export class LeftHeader {
    @Input() header = '';
}
