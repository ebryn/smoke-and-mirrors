var DEFAULT_COUNT = 10;
var URL_BASE = 'http://lorempixel.com';
var CATEGORIES = [
  'abstract',
  'city',
  'people',
  'transport',
  'food',
  'nature',
  'business',
  'nightlife',
  'sports',
  'cats',
  'fashion',
  'technics'
];

function isGray() {
  return Math.round(Math.random());
}

function getRandomNumber(min, max) {
  return Math.floor( Math.random() * (max + 1 - min) + min );
}

function getWidth() {
  return getRandomNumber(1500, 3000);
}
function generateImageId(index) {
  return (new Date()).getTime() + '-' + index;
}
function getId() {
  return getRandomNumber(1, 10);
}

function getCategoryIndex() {
  var max = CATEGORIES.length - 1;
  return getRandomNumber(0, max);
}

function generateImageSrc(index) {
  var parts = [];
  var preview = [];
  parts.push(URL_BASE);
  preview.push(URL_BASE);
  if (isGray()) {
    parts.push('g');
    preview.push('g');
  }
  var width = getWidth();
  parts.push(width);
  parts.push(width);
  var small = 350;
  preview.push(small);
  preview.push(small);
  var cat = CATEGORIES[getCategoryIndex()];
  parts.push(cat);
  preview.push(cat);
  var id = getId();
  parts.push(id);
  preview.push(id);
  return {
    large: parts.join('/'),
    small: preview.join('/'),
    id: generateImageId(index)
  };
}

export default function getImages(count) {

  count = count || DEFAULT_COUNT;

  var imageUrls = [];


  for (var i = 1; i <= count; i++) {
    imageUrls.push(generateImageSrc(i));
  }

  return imageUrls;
}
