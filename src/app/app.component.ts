import { Component, OnInit } from '@angular/core';
import { Controller, Scene } from './extensions/scrollmagic-helpers';
import { TimelineMax } from 'greensock';

import './../../node_modules/greensock/src/TimelineMax.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const timeline = new TimelineMax();
    timeline.to('body', 1, { background: 'red' });
    const controller = Controller({});
    const scene = Scene({
      duration: 400,
      triggerElement: 'body',
      triggerEvent: 'onLeave'
    })
    .addTween(timeline);
  }
}
