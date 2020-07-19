import { Component, OnInit } from '@angular/core';

import { DashboarService } from './../dashboar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartCard = [];

  constructor(private dashboarService: DashboarService) { }

  ngOnInit(): void {
    this.chartCard = this.dashboarService.chartCard();
  }

}
