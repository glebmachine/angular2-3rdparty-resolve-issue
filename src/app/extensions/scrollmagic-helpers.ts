import { Controller as SMController, Scene as SMScene } from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
// import 'debug.addIndicators';
import TweenMax from 'TweenMax';
import getViewport from 'getviewport';
import $ from 'jquery';

declare const require: any;

// const debug = ENV === 'development';
const debug = false;
const w = $(window);

export function Scene(opts) {
  let offsetInPercents: any = false;
  let label = opts.triggerElement;

  // configure
  if (typeof opts.offset === 'string' && opts.offset.indexOf('%') !== -1) {
    offsetInPercents = opts.offset;
    opts.offset = getViewport().height / 100 * parseInt(offsetInPercents, 10);
  }

  if (debug) {
    if (opts.triggerElement.tagName) {
      label = opts.triggerElement.className;
    }
  }

  if (opts.wrap) {
    delete opts.wrap;
    const wrapper = $('<div></div>');
    $(opts.triggerElement).wrap(wrapper);
    opts.triggerElement = $(opts.triggerElement).parent().get(0);
  }

  const scene = new SMScene(opts);

  if (debug) {
    scene.addIndicators({ name: label });
  }

  function updateOffset() {
    scene.offset(getViewport().height / 100 * parseInt(offsetInPercents, 10));
  }

  if (offsetInPercents) {
    w.on('resize', updateOffset);
    scene.on('destroy', () => {
      w.off('resize', updateOffset);
    });
  }

  return scene;
};

export function Controller(opts = {}) {
  return new SMController(opts);
}