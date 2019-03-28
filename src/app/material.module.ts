import {MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule],
})
export class MaterialModule { }