import { NgModule } from '@angular/core';
import { SomeParentComponentComponent } from '../some-parent-component/some-parent-component.component';
import { ReusableTableDumbComponent } from './reusable-table-dumb.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SomeParentComponentComponent, ReusableTableDumbComponent],
  imports: [CommonModule],
  exports: [SomeParentComponentComponent, ReusableTableDumbComponent],
})
export class ReusableTableDumbModule {}
