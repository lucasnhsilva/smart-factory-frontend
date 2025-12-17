import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { MenuModule } from 'primeng/menu';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ArrowRightIcon } from 'primeng/icons';

@Component({
  selector: 'app-main-layout',
  imports: [TreeModule, MenuModule, DrawerModule, ButtonModule, PanelModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
})
export class MainLayoutComponent {
  visible: boolean = false;
}
