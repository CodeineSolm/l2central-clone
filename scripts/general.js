import { freshNews } from './fresh-news.js';
import { events } from './events.js';
import { articles } from './articles.js';
import { guides } from './guides.js';
import { news } from './news.js';
import { formatDate } from './date.js';

//load fresh news
const freshNewsElement = document.querySelector('.news');
let freshNewsHTML = '';
const sortedFreshNews = freshNews.sort((a, b) => b.date - a.date);

sortedFreshNews.forEach(value => {
  if (value.subTitle === "") {
    freshNewsHTML += `
      <div class="news-card">
        <div class="news-card-title">${value.title}</div>
        <div class="news-card-date">${formatDate(value.date)}</div>
      </div>
    `;
  } else {
    freshNewsHTML += `
      <div class="news-card">
        <div class="news-card-title">${value.title}</div>
        <div class="news-card-sub-title">${value.subTitle}</div>
        <div class="news-card-date">${formatDate(value.date)}</div>
      </div>
    `;
  }
});

freshNewsElement.innerHTML = freshNewsHTML;

//load events
const eventsElement = document.querySelector('.events-container');
const eventsContentElement = eventsElement.querySelector('.container-content');
const sortedEvents = events.sort((a, b) => b.date - a.date);
eventsContentElement.innerHTML = loadContent(sortedEvents);

//load articles
const articlesElement = document.querySelector('.articles-container');
const articlesContentElement = articlesElement.querySelector('.container-content');
const sortedArticles = articles.sort((a, b) => b.date - a.date);
articlesContentElement.innerHTML = loadContent(sortedArticles);

//load guides
const guidesElement = document.querySelector('.guides-container');
const guidesContentElement = guidesElement.querySelector('.container-content');
const sortedGuides = guides.sort((a, b) => b.date - a.date);
guidesContentElement.innerHTML = loadContent(sortedGuides);

//load news
const newsElement = document.querySelector('.news-container');
const newsContentElement = newsElement.querySelector('.container-content');
const sortedNews = news.sort((a, b) => b.date - a.date);
newsContentElement.innerHTML = loadContent(sortedNews);

//function to load content into a page
function loadContent(content) {
  let HTML = '';
  content.forEach(value => {
    HTML += `
        <div class="content-card">
          <img src="${value.img}" />
          <div class="content-info">
            <div class="content-type">${value.type}</div>
            <div class="content-title">${value.title}</div>
            <div class="content-date">${formatDate(value.date)}</div>
          </div>
        </div>
      `;
  });
  return HTML;
}

//horizontal scroll handle
newsContentElement.addEventListener("wheel", (e) => {
  const atStart = newsContentElement.scrollLeft <= 0;

  const atEnd = newsContentElement.scrollLeft + newsContentElement.clientWidth >= newsContentElement.scrollWidth;

  const goingRight = e.deltaY > 0;
  const goingLeft  = e.deltaY < 0;

  if ((goingRight && atEnd) || (goingLeft && atStart)) return;

  e.preventDefault();
  newsContentElement.scrollLeft += e.deltaY * 10;
}, {passive: false});


guidesContentElement.addEventListener("wheel", (e) => {
  const atStart = guidesContentElement.scrollLeft <= 0;

  const atEnd = guidesContentElement.scrollLeft + guidesContentElement.clientWidth >= guidesContentElement.scrollWidth;

  const goingRight = e.deltaY > 0;
  const goingLeft  = e.deltaY < 0;

  if ((goingRight && atEnd) || (goingLeft && atStart)) return;

  e.preventDefault();
  guidesContentElement.scrollLeft += e.deltaY * 10;
}, {passive: false});


articlesContentElement.addEventListener("wheel", (e) => {
  const atStart = articlesContentElement.scrollLeft <= 0;

  const atEnd = articlesContentElement.scrollLeft + articlesContentElement.clientWidth >= articlesContentElement.scrollWidth;

  const goingRight = e.deltaY > 0;
  const goingLeft  = e.deltaY < 0;

  if ((goingRight && atEnd) || (goingLeft && atStart)) return;

  e.preventDefault();
  articlesContentElement.scrollLeft += e.deltaY * 10;
}, {passive: false});


eventsContentElement.addEventListener("wheel", (e) => {
  const atStart = eventsContentElement.scrollLeft <= 0;

  const atEnd = eventsContentElement.scrollLeft + eventsContentElement.clientWidth >= eventsContentElement.scrollWidth;

  const goingRight = e.deltaY > 0;
  const goingLeft  = e.deltaY < 0;

  if ((goingRight && atEnd) || (goingLeft && atStart)) return;

  e.preventDefault();
  eventsContentElement.scrollLeft += e.deltaY * 10;
}, {passive: false});