#!/usr/bin/env node

'use strict';

const fs       = require('fs');
const moment   = require('moment');
const holidays = JSON.parse(fs.readFileSync('holidays.json', 'utf8'));
const now      = moment.now();

moment.locale('pt-br');

let nextHolidays = holidays
    .filter(holiday => moment(holiday.timestamp).isAfter(now))
    .map(holiday => moment(holiday.timestamp));

let next = moment.min(nextHolidays);

console.log(next.format("dddd, DD [de] MMMM."));
console.log('Faltam ' + next.fromNow());