module.exports = function rectClamp (rect, bounds) {
  var w = rect[2], h = rect[3];
  var maxWidth = bounds[2], maxHeight = bounds[3];
  var ratio = w / h;
  if (w > maxWidth) {
    w = maxWidth;
    h = ~~(w / ratio);
  }
  if (h > maxHeight) {
    h = maxHeight;
    w = ~~(h * ratio);
  }
  return [
    bounds[0] + Math.max(0, Math.min(rect[0], maxWidth-w)),
    bounds[1] + Math.max(0, Math.min(rect[1], maxHeight-h)),
    w,
    h
  ];
};

