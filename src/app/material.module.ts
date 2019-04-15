import {MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatBadgeModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatBadgeModule],
  exports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatBadgeModule],
})
export class MaterialModule { }