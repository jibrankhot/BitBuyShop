import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IMenuItem } from '../../../types/menu-d-type';
import { menu_data } from '../../../data/menu-data';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  imports: [SharedModule]
})
export class MenuBarComponent {
  @Input() isMobile: boolean = false;

  public menu_data: IMenuItem[] = menu_data;

  public activeTabId: number | null = null; // Top-level menu
  public openSubmenuIds: { [parentId: number]: Set<number> } = {}; // Nested submenus can track multiple opens

  // Toggle top-level menu
  toggleTab(id: number) {
    this.activeTabId = this.activeTabId === id ? null : id;
    if (this.activeTabId === null) {
      // Close all nested submenus when top-level closes
      this.openSubmenuIds = {};
    }
  }

  // Toggle nested submenu
  toggleSubmenu(parentId: number, subId: number) {
    if (!this.openSubmenuIds[parentId]) {
      this.openSubmenuIds[parentId] = new Set([subId]);
    } else {
      if (this.openSubmenuIds[parentId].has(subId)) {
        this.openSubmenuIds[parentId].delete(subId);
      } else {
        this.openSubmenuIds[parentId].add(subId);
      }
    }
  }

  // Check if nested submenu is open
  isSubmenuOpen(parentId: number, subId: number): boolean {
    return this.openSubmenuIds[parentId]?.has(subId) || false;
  }
}
