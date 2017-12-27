/**
 * Class to represent the occurences of a specific term for a specific gene
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
export class TermCount {

  entrez: number;
  term: string;
  count: number;

  constructor(entrez: number, term: string, count: number) {
    this.entrez = entrez;
    this.term = term;
    this.count = count;
  }

}
