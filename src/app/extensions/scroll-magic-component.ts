import { Controller } from './scrollmagic-helpers';
import { OnDestroy, OnInit } from '@angular/core';

export class ScrollMagicComponent implements OnInit, OnDestroy {
  controller;
  ngOnInit() {
    this.controller = Controller();
  }

  ngOnDestroy() {
    this.controller.destroy();
  }
}

