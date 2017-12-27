/**
 * Interface for gene variant
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
import { Gene } from './gene';

export interface Variant {
  name: string;
  alteration: string;
  gene: Gene;
  consequence: {
    term: string;
  };
  refResidues: string;
  proteinStart: number;
  proteinEnd: number;
  variantResidues: string;
}
