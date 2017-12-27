/**
 * Component for serving a plot of certain gene variant information for a given Entrez Gene ID
 *
 * @author Karin Breuer
 * @date 12/24/2017
 *
 */
import { Component, OnInit } from '@angular/core';
import { OncokbService  } from '../../services/oncokb.service';
import { TermCount } from '../../models/termcount';
import 'rxjs/add/operator/distinct';

declare var Plotly;

@Component({
  selector: 'app-termchart',
  templateUrl: './termchart.component.html',
  styleUrls: ['./termchart.component.css']
})
export class TermchartComponent implements OnInit {
  service: OncokbService;
  termCounts: TermCount[];
  redraw = false;

  // Constructor with data retrieval service
  constructor(private oncokbService: OncokbService) {
    this.service = oncokbService;
  }

  ngOnInit() {
    this.plot();
  }

  /**
   * Actual function to retrieve term counts and plot them
   * @TODO needs some refactoring and better color choices
   */
  plot() {
    this.service.getTermCount()
      .subscribe(results => {
        this.termCounts = results;
        let entrez = this.termCounts.map(t => t.entrez)[0];

        const plotdata = [
          {
            x: this.termCounts.map(t => t.term),
            y: this.termCounts.map(t => t.count),
            type: 'bar',
            orientation: 'v'       
          }
        ];

        const plotlayout = {
          title: 'Terms and count per term for variants of' + (entrez > 0 ? ` Entrez gene with ID ${entrez}` : ' all available Entrez genes'),
          xaxis: {
            tickangle: -45,
            zeroline: false,
            showline: false,
            showticklabels: true,
          },
          yaxis: {
            showGrid: true,
            zeroline: false,
            showline: false,
            showticklabels: true,
            ticksuffix : '  '
          },
          paper_bgcolor: 'rgb(248,248,255)',
          color: 'rgba(0,0,0,.42)',
          margin: {
            l: 100,
            r: 10,
            t: 100,
            b: 150
          },
          font: {
            family: 'Arial',
            size: '12'
          },
        };

        if (this.redraw) {
          Plotly.redraw('plot', plotdata, plotlayout);
        } else {
          Plotly.newPlot('plot', plotdata, plotlayout);
          this.redraw = false;
        }
    });

  }

}
