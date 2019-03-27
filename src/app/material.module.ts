import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule],
})
export class MaterialModule { }