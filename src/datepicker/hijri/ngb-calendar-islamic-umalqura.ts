import {Injectable} from '@angular/core';

import {NgbPeriod} from '../ngb-calendar';
import {NgbDate} from '../ngb-date';

import {NgbCalendarHijri} from './ngb-calendar-hijri';
import {NgbCalendarIslamicCivil} from './ngb-calendar-islamic-civil';

/**
 * Umalqura calendar is one type of Hijri calendars used in islamic countries.
 * This Calendar is used by Saudi Arabia for administrative purpose.
 * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
 * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
 */

const GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
const GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
const HIJRI_BEGIN = 1300;
const HIJRI_END = 1600;
const ONE_DAY = 1000 * 60 * 60 * 24;
const ISLAMIC_CIVIL = new NgbCalendarIslamicCivil();

const MONTH_LENGTH = [
  // 1300-1304
  '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
  // 1305-1309
  '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
  // 1310-1314
  '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
  // 1315-1319
  '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
  // 1320-1324
  '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
  // 1325-1329
  '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
  // 1330-1334
  '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
  // 1335-1339
  '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
  // 1340-1344
  '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
  // 1345-1349
  '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
  // 1350-1354
  '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
  // 1355-1359
  '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
  // 1360-1364
  '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
  // 1365-1369
  '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
  // 1370-1374
  '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
  // 1375-1379
  '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
  // 1380-1384
  '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
  // 1385-1389
  '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
  // 1390-1394
  '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
  // 1395-1399
  '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
  // 1400-1404
  '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
  // 1405-1409
  '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
  // 1410-1414
  '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
  // 1415-1419
  '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
  // 1420-1424
  '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
  // 1425-1429
  '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
  // 1430-1434
  '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
  // 1435-1439
  '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
  // 1440-1444
  '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
  // 1445-1449
  '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
  // 1450-1454
  '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
  // 1455-1459
  '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
  // 1460-1464
  '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
  // 1465-1469
  '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
  // 1470-1474
  '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
  // 1475-1479
  '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
  // 1480-1484
  '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
  // 1485-1489
  '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
  // 1490-1494
  '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
  // 1495-1499
  '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
  // 1500-1504
  '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
  // 1505-1509
  '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
  // 1510-1514
  '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
  // 1515-1519
  '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
  // 1520-1524
  '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
  // 1525-1529
  '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
  // 1530-1534
  '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
  // 1535-1539
  '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
  // 1540-1544
  '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
  // 1545-1549
  '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
  // 1550-1554
  '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
  // 1555-1559
  '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
  // 1560-1564
  '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
  // 1565-1569
  '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
  // 1570-1574
  '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
  // 1575-1579
  '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
  // 1580-1584
  '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
  // 1585-1589
  '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
  // 1590-1594
  '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
  // 1595-1599
  '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
  // 1600
  '001010011101'
];

function getDaysDiff(date1: Date, date2: Date): number {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.round(diff / ONE_DAY);
}

@Injectable()
export class NgbCalendarIslamicUmalqura extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
   * `gdate` is s JS Date to be converted to Hijri.
   */
  fromGregorian(gDate: Date): NgbDate {
    let hDay = 1, hMonth = 0, hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;
      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;
          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;
            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }
            if (j > 11) {
              j = 0;
              year++;
            }
            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }
          daysDiff = daysDiff - numOfDays;
        }
      }
    } else {
      return ISLAMIC_CIVIL.fromGregorian(gDate);
    }
  }
  /**
   * Converts the current Hijri date to Gregorian.
   */
  toGregorian(hijriDate: NgbDate): Date {
    const hYear = hijriDate.year;
    const hMonth = hijriDate.month - 1;
    const hDay = hijriDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }
      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }
      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = ISLAMIC_CIVIL.toGregorian(hijriDate);
    }
    return gDate;
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  getDaysInIslamicMonth(month: number, year: number): number {
    if (year >= HIJRI_BEGIN && year <= HIJRI_END) {
      const pos = year - HIJRI_BEGIN;
      return MONTH_LENGTH[pos].charAt(month - 1) === '1' ? 30 : 29;
    }
    return ISLAMIC_CIVIL.getDaysInIslamicMonth(month, year);
  }

  getNext(date: NgbDate, period: NgbPeriod = 'd', number = 1) {
    date = NgbDate.from(date);

    switch (period) {
      case 'y':
        date = this.setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case 'm':
        date = this.setMonth(date, date.month + number);
        date.day = 1;
        return date;
      case 'd':
        return this.setDay(date, date.day + number);
      default:
        return date;
    }
  }

  getPrev(date: NgbDate, period: NgbPeriod = 'd', number = 1) { return this.getNext(date, period, -number); }

  getWeekday(date: NgbDate) {
    const day = this.toGregorian(date).getDay();
    // in JS Date Sun=0, in ISO 8601 Sun=7
    return day === 0 ? 7 : day;
  }

  getWeekNumber(week: NgbDate[], firstDayOfWeek: number) {
    // in JS Date Sun=0, in ISO 8601 Sun=7
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }

    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];

    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));  // Thursday
    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));  // Compare with Muharram 1
    return Math.floor(Math.round((time - MuhDate.getTime()) / ONE_DAY) / 7) + 1;
  }

  getToday(): NgbDate { return this.fromGregorian(new Date()); }
}
