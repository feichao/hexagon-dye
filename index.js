var hexWrap = document.getElementById('hex-wrap');
var hexDye = document.getElementById('hex-dye');
var transformOrigin = ['left top', 'right top', 'left bottom', 'right bottom', 'center center'];

function getLeft() {
  return hexWrap.offsetWidth / 2 * Math.random();
}

function getTop() {
  return hexWrap.offsetHeight / 2 * Math.random();
}

function getWidth() {
  return (hexWrap.offsetWidth * 0.6) * Math.random() + hexWrap.offsetWidth * 0.1;
}

function getHeight() {
  return (hexWrap.offsetHeight * 0.6) * Math.random() + hexWrap.offsetHeight * 0.1;
}

function lengthPx(fun) {
	return fun() + 'px';
}

hexDye.style.left = lengthPx(getLeft);
hexDye.style.top = lengthPx(getTop);
hexDye.style.width = lengthPx(getWidth);
hexDye.style.height = lengthPx(getWidth);

setInterval(function() {
  hexDye.style.left = lengthPx(getLeft);
  hexDye.style.top = lengthPx(getTop);
  hexDye.style.width = lengthPx(getWidth);
  hexDye.style.height = lengthPx(getWidth);
  hexDye.style.transformOrigin = transformOrigin[Math.floor(Math.random() * transformOrigin.length)];
}, 5000);