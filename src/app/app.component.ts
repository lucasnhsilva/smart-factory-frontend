import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/components/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'smart-factory-frontend';
}
