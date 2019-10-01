import { Component, OnInit } from '@angular/core';
import { testTypes, TestType } from '../model/test.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  testTypes: TestType[] = [];
  testDescription: string = "Nothing Selcted!"

  ngOnInit() {
    this.testTypes = testTypes;
  }

  selectTestType(id: number) {
      const testType = this.testTypes.filter(testType => testType.id === id);
      this.testDescription = testType[0].description;
  }

}
