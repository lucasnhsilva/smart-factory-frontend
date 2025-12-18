export enum NodeType {
  ENTERPRISE = 'ENTERPRISE',
  SITE = 'SITE',
  AREA = 'AREA',
  LINE = 'LINE',
  WORKCELL = 'WORKCELL',
}

export interface FactoryNode {
  id: number;
  parentId: number | null;
  name: string;
  type: NodeType;
  children?: FactoryNode[]; // Recursivo
}
