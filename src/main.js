import {getFilterTemplate} from './components/filter.js';
import {getMenuTemplate} from './components/menu.js';
import {getSortTemplate} from './components/sort.js';
import {getAddEventTemplate} from './components/add-event.js';
import {getTripTemplate} from './components/trip.js';
import {getEventsListTemplate} from './components/event-list.js';
import {getEventsDayTemplate} from './components/events-day.js';
import {getEventsCardsListTemplate} from './components/events-cards-list.js';
import {getEventsCardTemplate} from './components/events-card.js';

const CARD_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const tripInfoElement = document.querySelector(`.trip-main__trip-info`);
render(tripInfoElement, getTripTemplate(), `afterbegin`);

const tripControlsElement = document.querySelector(`.trip-main__trip-controls`);
const tripMenuElement = tripControlsElement.querySelectorAll(`h2`)[0];
const tripFiltersElement = tripControlsElement.querySelectorAll(`h2`)[1];
render(tripMenuElement, getMenuTemplate(), `afterend`);
render(tripFiltersElement, getFilterTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);
const tripSortElement = tripEventsElement.querySelector(`h2`);
render(tripSortElement, getSortTemplate(), `afterend`);

const tripElement = tripEventsElement.querySelector(`.trip-sort`);
render(tripElement, getAddEventTemplate(), `afterend`);

const tripEditFormElement = document.querySelector(`.event--edit`);
render(tripEditFormElement, getEventsListTemplate(), `afterend`);

const tripEventsListElement = document.querySelector(`.trip-days`);
render(tripEventsListElement, getEventsDayTemplate(), `beforeend`);

const tripEventsListItemElement = document.querySelector(`.trip-days__item`);
render(tripEventsListItemElement, getEventsCardsListTemplate(), `beforeend`);

const tripEventsCardsListElement = document.querySelector(`.trip-events__list`);
for (let i = 0; i < CARD_COUNT; i++) {
  render(tripEventsCardsListElement, getEventsCardTemplate(), `beforeend`);
}
