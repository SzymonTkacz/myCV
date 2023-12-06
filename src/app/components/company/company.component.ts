import { Component, Input } from '@angular/core';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class Company {
    @Input() company = '';
    @Input() date = '';
}
