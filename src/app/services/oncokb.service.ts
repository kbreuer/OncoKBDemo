/**
 * Injectable service for retrieving data from a REST service via HttpClient.
 * The only query parameter given is an Entrez Gene ID.
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { Variant } from '../models/variant';
import { TermCount } from '../models/termcount';


@Injectable()
export class OncokbService {

  private entrezGeneId: number;

  constructor(private http: HttpClient) {
    this.entrezGeneId = 0;
  }

  /**
   * Return an observable for variant data for given Entrez Gene ID
   */
  getVariants(entrezGeneId): Observable<Variant[]> {
    let variantUrl = 'http://oncokb.org/api/v1/variants';
    this.entrezGeneId = entrezGeneId;
    if (this.entrezGeneId > 0) {
      variantUrl = `http://oncokb.org/api/v1/genes/${this.entrezGeneId}/variants`;
    }
    return this.http.get<Variant[]>(variantUrl);
  }

  /**
   * Return an observable for TermCount data, counting occurrences of each term in variant consequence elements
   */
  getTermCount(): Observable<TermCount[]> {
    return this.getVariants(this.entrezGeneId)
      .concatMap(data => data)
      .groupBy(variant => variant.consequence.term)
      .mergeMap(group => group
        .count()
        .map((total) => new TermCount(this.entrezGeneId, group.key, total))
      )
      .toArray();
    }

}
