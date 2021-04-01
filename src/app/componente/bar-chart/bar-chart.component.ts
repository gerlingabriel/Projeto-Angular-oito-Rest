import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Grafico } from 'src/app/model/Grafico';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  grafico = new Grafico();

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salários dos Funcionários' }
  ];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.carregarGrafico().subscribe(data => {
      this.grafico = data

      this.barChartLabels = this.grafico.nome.split(",")

      var arraySalario = JSON.parse('[' + this.grafico.salario + ']');

      this.barChartData = [
        { data: arraySalario, label: 'Salários dos Funcionários' }
      ];

    });
  }

}
