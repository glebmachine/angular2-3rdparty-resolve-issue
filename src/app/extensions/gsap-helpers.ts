import TweenMax from 'TweenMax';
// import TweenLite from 'TweenLite';

// TweenLite.ticker.useRAF(true);
TweenMax.ticker.useRAF(true);

export function clearTimeline(timeline) {
  const targets = timeline.getChildren();
  timeline.kill();

  targets.forEach(target => {
    if (target.getChildren) {
      clearTimeline(target);
      return;
    }
    TweenMax.set(target.target, { clearProps: 'all' });
  });
}