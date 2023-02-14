import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ReusableTableDumbColumnsInterface } from './reusable-table-dumb.interfaces';

@Component({
  selector: 'app-reusable-table-dumb',
  templateUrl: './reusable-table-dumb.component.html',
  styleUrls: ['./reusable-table-dumb.component.less'],
})
export class ReusableTableDumbComponent<T extends Record<any, any>>
  implements OnChanges
{
  @Input()
  public columns: ReusableTableDumbColumnsInterface<T> = [];

  @Input()
  public data: T[] = [];

  #originColumns: ReusableTableDumbColumnsInterface<T> = [];
  cell1?: T = undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].firstChange) {
      this.#originColumns = [...this.columns];
    }
    let existingCols: string[] = [];

    if (this.data.length) {
      existingCols = Object.keys(this.data[0]);
    }
    this.columns = this.#originColumns.filter((cd) =>
      existingCols.find((col) => col === cd.key)
    );
  }
}
