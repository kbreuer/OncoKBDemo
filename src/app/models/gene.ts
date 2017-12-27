/**
 * Interface for gene
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
export interface Gene {
  name: string;
  entrezGeneId: number;
  hugoSymbol: string;
  oncogene: boolean;
  tsg: boolean;
  curatedIsoform: string;
  curatedRefSeq: string;
  geneAliases: {};
}
