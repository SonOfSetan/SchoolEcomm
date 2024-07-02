// src/app/shared/prime-ng.module.ts
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
// Import other PrimeNG modules as needed

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    // Add other PrimeNG modules here
  ]
})
export class PrimeNgModule { }
