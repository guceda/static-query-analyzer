export interface INode {
  type: string;
  [key: string]: any;
}

class Visitor {
  visitNode(node: INode | INode[]): any[] {
    return Array.isArray(node) ? this.visitAll(node) : this.visit(node);
  }

  private visit(node: INode): any {
    if (node.type) return (this as any)[`${node.type}Visit`](node);
    if (node.ast) return (this as any).tableColumnAstVisit(node);
  }

  private visitAll(nodes: INode[]) {
    return nodes.map((node) => (this as any)[`${node.type}Visit`](node));
  }
}

export default Visitor;
