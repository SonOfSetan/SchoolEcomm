import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resource-attributes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './resource-attributes.component.html',
  styleUrl: './resource-attributes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceAttributesComponent { }
