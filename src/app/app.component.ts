import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CdkDragDrop, moveItemInArray, CdkDragStart, CdkDragEnd} from '@angular/cdk/drag-drop';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _ = _;
  title = 'dnd-poc';
  draggingData = [];
  lastClonedDraggingData = [];

  data = [
    [
      {
        newIndex: 0,
        origIndex: 0,
        textField: "Switch Trade 1",
      },
      {
        newIndex: 1,
        origIndex: 1,
        textField: "Switch Trade 1a",
      },
    ],
    [
      {
        newIndex: 2,
        origIndex: 2,
        textField: "Pro Rata Trade 1",
      },
    ],
    [
      {
        newIndex: 3,
        origIndex: 3,
        textField: "Pro Rata Trade 2",
      },
    ],
    [
      {
        newIndex: 4,
        origIndex: 4,
        textField: "Cascade Trade 1",
      },
      {
        newIndex: 5,
        origIndex: 5,
        textField: "Cascade Trade 1a",
      },
      {
        newIndex: 6,
        origIndex: 6,
        textField: "Cascade Trade 1b",
      },
    ],
    [
      {
        newIndex: 7,
        origIndex: 7,
        textField: "Switch Trade 2",
      },
      {
        newIndex: 8,
        origIndex: 8,
        textField: "Switch Trade 2a",
      },
    ]
  ];

  constructor() {

  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    console.log(this.data);
    let tradeIndex = 0;

    _.forEach(this.data, groupData => {
      _.forEach(groupData, v => {
        tradeIndex++;
        console.log(tradeIndex + ' -> ' + v.newIndex);
        v.newIndex = tradeIndex;
      });
    });
  }

}
