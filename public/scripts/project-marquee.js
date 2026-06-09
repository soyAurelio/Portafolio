/**
 * Shared project-card marquee logic.
 * Animated description + tags scroll on hover when content overflows.
 */
function setupDescMarquee(inner) {
  const clamp = inner.parentElement;
  const text = inner.textContent || '';
  if (inner.scrollWidth <= clamp.offsetWidth + 2) return null;

  // Duplicate: [text][gap][text] — symmetric
  inner.innerHTML = '<span>' + text + '</span><span style="display:inline-block;width:2rem;flex-shrink:0"></span><span>' + text + '</span>';
  inner.style.display = 'inline-flex';
  inner.style.width = 'max-content';

  const firstCopy = inner.children[0];
  const gapEl = inner.children[1];
  const resetPoint = firstCopy.offsetWidth + gapEl.offsetWidth;
  const speed = 40 / 1000; // px/ms = ~40px/s

  let running = false, offset = 0, lastTime = 0, raf = 0;

  function tick(ts) {
    if (!running) return;
    var dt = ts - lastTime;
    offset -= speed * dt;
    if (offset <= -resetPoint) offset += resetPoint;
    inner.style.transform = 'translateX(' + offset + 'px)';
    lastTime = ts;
    raf = requestAnimationFrame(tick);
  }

  return {
    play: function () {
      if (running) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    },
    stop: function () {
      running = false;
      cancelAnimationFrame(raf);
      offset = 0;
      inner.style.transform = 'translateX(0)';
    },
  };
}

function setupTagsMarquee(inner) {
  const row = inner.parentElement;
  if (inner.scrollWidth <= row.offsetWidth + 2) return null;

  const tagCount = inner.children.length;
  const group = inner.cloneNode(true);
  const gap = document.createElement('span');
  gap.style.cssText = 'display:inline-block;width:3rem;flex-shrink:0';
  inner.appendChild(gap);
  inner.appendChild(group);

  const firstOrig = inner.children[0];
  const firstClone = inner.children[tagCount + 1];
  const resetPoint = firstClone.getBoundingClientRect().left - firstOrig.getBoundingClientRect().left;
  const speed = 50 / 1000; // px/ms = ~50px/s

  let running = false, offset = 0, lastTime = 0, raf = 0;

  function tick(ts) {
    if (!running) return;
    var dt = ts - lastTime;
    offset -= speed * dt;
    if (offset <= -resetPoint) offset += resetPoint;
    inner.style.transform = 'translateX(' + offset + 'px)';
    lastTime = ts;
    raf = requestAnimationFrame(tick);
  }

  return {
    play: function () {
      if (running) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    },
    stop: function () {
      running = false;
      cancelAnimationFrame(raf);
      offset = 0;
      inner.style.transform = 'translateX(0)';
    },
  };
}

init();

function init() {
  document.fonts.ready.then(function () {
    document.querySelectorAll('.project-card').forEach(function (card) {
      const controls = [];

      const descInner = card.querySelector('.project-desc-inner');
      if (descInner) {
        const c = setupDescMarquee(descInner);
        if (c) controls.push(c);
      }

      const tagsRow = card.querySelector('.project-tags-row');
      if (tagsRow) {
        const tagsInner = tagsRow.firstElementChild;
        if (tagsInner) {
          const c2 = setupTagsMarquee(tagsInner);
          if (c2) controls.push(c2);
        }
      }

      if (controls.length === 0) return;

      card.addEventListener('mouseenter', function () {
        controls.forEach(function (ctrl) { ctrl.play(); });
      });
      card.addEventListener('mouseleave', function () {
        controls.forEach(function (ctrl) { ctrl.stop(); });
      });
    });
  });
}
