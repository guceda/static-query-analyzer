import getPreview, { getAST } from './src/preview/getPreview';
import { PreviewVisitor } from './src/visitors/PreviewVisitor';

export default getPreview;
export const parse = getAST;
export const Visitor = PreviewVisitor;
