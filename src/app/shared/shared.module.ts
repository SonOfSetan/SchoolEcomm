// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
