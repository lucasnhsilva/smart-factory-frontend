import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { MenuModule } from 'primeng/menu';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FactoryNodeService } from '../../../features/workcells-dashboard/services/factory-node.service';
import { TreeNode } from 'primeng/api';
import { map } from 'rxjs';
import { FactoryNode, NodeType } from '../../../shared/models/node.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [
    TreeModule,
    MenuModule,
    DrawerModule,
    ButtonModule,
    PanelModule,
    NgClass,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
  providers: [FactoryNodeService],
})
export class MainLayoutComponent {
  constructor(private readonly factoryNodeService: FactoryNodeService) {
    const response = this.factoryNodeService.loadFactoryNodes('LINE');

    response
      .pipe(map((data) => this.mapToTreeNode(data as FactoryNode[])))
      .subscribe((mappedNodes) => {
        this.nodes = mappedNodes;
      });
  }

  nodes: any[] = [];
  selectedNode: TreeNode | null = null;

  visible: boolean = false;

  private mapToTreeNode(nodes: FactoryNode[]): TreeNode[] {
    return nodes.map((node) => ({
      label: node.name, // 'name' vira 'label'
      data: node, // Guardamos o objeto original aqui para usar o ID depois
      expanded:
        Boolean(localStorage.getItem('tree-menu-expanded-' + node.id)) || false, // Já vem expandido para visualizarmos a árvore toda
      type: node.type, // Usaremos isso para definir o ícone no HTML
      children:
        node.type !== 'LINE' && node.children
          ? this.mapToTreeNode(node.children)
          : [],

      // Ícones padrão baseados no tipo (Opção rápida sem template HTML)
      icon: this.getIconByType(node.type),
    }));
  }

  private getIconByType(type: NodeType): string {
    switch (type) {
      case NodeType.ENTERPRISE:
        return 'pi pi-globe';
      case NodeType.SITE:
        return 'pi pi-building';
      case NodeType.AREA:
        return 'pi pi-th-large';
      case NodeType.LINE:
        return 'pi pi-server'; // ou pi-sitemap
      case NodeType.WORKCELL:
        return 'pi pi-cog';
      default:
        return 'pi pi-folder';
    }
  }

  onNodeSelect(event: any) {
    console.log('Nó selecionado:', event.node.data);
    // Carregar o roteamento para o dashboard dependendo do nó selecionado
  }
}
