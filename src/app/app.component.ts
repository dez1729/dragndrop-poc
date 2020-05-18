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
  title = 'dnd-poc';
  draggingData = [];
  lastClonedDraggingData = [];

  data = [
    [
      {
        index: 0,
        displayIndex: 1,
        textField: "The Phantom Menace",
      },
      {
        index: 1,
        displayIndex: 2,
        textField: "The Attack of the Clones",
      },
    ],
    [
      {
        index: 2,
        displayIndex: 3,
        textField: "The Revenge of the Sith",
      },
    ],
    [
      {
        index: 3,
        displayIndex: 4,
        textField: "A New Hope",
      },
    ],
    [
      {
        index: 4,
        displayIndex: 5,
        textField: "The Empire Strikes Back",
      },
      {
        index: 5,
        displayIndex: 6,
        textField: "The Return of the Jedi",
      },
      {
        index: 6,
        displayIndex: 7,
        textField: "The Force Awakens",
      },
    ],
    [
      {
        index: 7,
        displayIndex: 8,
        textField: "The Last Jedi",
      },
      {
        index: 8,
        displayIndex: 9,
        textField: "The Rise of Skywalker",
      },
    ]
  ];

  constructor() {

  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    // console.log(_.get(event, ['source', 'data']));
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

}
