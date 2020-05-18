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
    {
      index: 0,
      displayIndex: 1,
      textField: "The Phantom Menace",
      groupedIndices: [0, 1],
    },
    {
      index: 1,
      displayIndex: 2,
      textField: "The Attack of the Clones",
      groupedIndices: [0, 1],
    },
    {
      index: 2,
      displayIndex: 3,
      textField: "The Revenge of the Sith",
      groupedIndices: [2],
    },
    {
      index: 3,
      displayIndex: 4,
      textField: "A New Hope",
      groupedIndices: [3],
    },
    {
      index: 4,
      displayIndex: 5,
      textField: "The Empire Strikes Back",
      groupedIndices: [4, 5, 6],
    },
    {
      index: 5,
      displayIndex: 6,
      textField: "The Return of the Jedi",
      groupedIndices: [4, 5, 6],
    },
    {
      index: 6,
      displayIndex: 7,
      textField: "The Force Awakens",
      groupedIndices: [4, 5, 6],
    },
    {
      index: 7,
      displayIndex: 8,
      textField: "The Last Jedi",
      groupedIndices: [7, 8],
    },
    {
      index: 8,
      displayIndex: 9,
      textField: "The Rise of Skywalker",
      groupedIndices: [7, 8],
    },
  ];

  // outputData$: Observable<any> = of(this.data);

  constructor() {

  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    // console.log(_.get(event, ['source', 'data']));
    // moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    // this.data.splice(event.previousIndex - 1, 0);
    // this.data.splice.apply(this.data, [event.currentIndex, 0].concat(_.concat(this.draggingData, this.lastClonedDraggingData)));
    // this.draggingData = [];


    this.lastClonedDraggingData = [];
  }

  dragStarted(event: CdkDragStart<any>, currentIndex: number, groupedIndices: number[]) {
    console.log(event);
    // this.lastClonedDraggingData = _.cloneDeep(this.data[groupedIndices[groupedIndices.length - 1]]);
    // this.draggingData = this.data.splice(groupedIndices[0], groupedIndices.length - 1);
    // [this.draggingData, this.data] = _.partition(this.data, v => _.includes(this.data[currentIndex].groupedIndices, v.index));
    this.draggingData = _.filter(this.data, v => _.includes(this.data[currentIndex].groupedIndices, v.index));
    _.remove(this.data, v => _.includes(_.filter(groupedIndices, u => !_.eq(u, currentIndex)), v.index));
    console.log(this.draggingData);
    console.log(this.data);
  }

  dragEnded(event: CdkDragEnd<any>, currentIndex: number, groupedIndices: number[]) {
    console.log(event);
    // this.data.splice.apply(this.data, [currentIndex, 0].concat(this.draggingData));
    // this.draggingData = [];
    console.log(this.data);
    // document.getElementById('exampleBox').style.cursor = "default";
    // event.source.element.nativeElement.style.cursor = "";
  }
}
