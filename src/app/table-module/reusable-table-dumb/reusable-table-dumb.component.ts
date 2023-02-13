import {Component, Input} from '@angular/core';
import {ReusableTableDumbColumnsInterface} from './reusable-table-dumb.interfaces';

@Component({
  selector: 'app-reusable-table-dumb',
  templateUrl: './reusable-table-dumb.component.html',
  styleUrls: ['./reusable-table-dumb.component.less']
})
export class ReusableTableDumbComponent<T extends Record<any, any>>  {
  @Input()
  public columns: ReusableTableDumbColumnsInterface<T> = []

  @Input()
  public data: T[] = []


}
