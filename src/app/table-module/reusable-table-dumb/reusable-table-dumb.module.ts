import { NgModule } from '@angular/core';
import {SomeParentComponentComponent} from "../some-parent-component/some-parent-component.component";
import {ReusableTableDumbComponent} from "./reusable-table-dumb.component";

@NgModule({
  declarations: [SomeParentComponentComponent , ReusableTableDumbComponent],
  exports: [SomeParentComponentComponent, ReusableTableDumbComponent]
})
export class ReusableTableDumbModule {}
