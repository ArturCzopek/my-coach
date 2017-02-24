import {Price} from "../get.entities";

export let PRICES_LIST: [Price[]] = [
  [
    new Price(1, new Date(2016, 8, 9), 'Auchan', 1, 13.5, 1),
    new Price(3, new Date(2016, 9, 9), 'M1', 1, 14.2, 1),
    new Price(5, new Date(2016, 10, 9), 'Auchan', 1, 13.6, 1)
  ],
  [
    new Price(2, new Date(2016, 8, 9), 'Auchan', 1, 18.9, 2),
    new Price(4, new Date(2016, 9, 9), 'M1', 1, 19.5, 2),
    new Price(6, new Date(2016, 11, 11), 'Auchan', 1, 19, 2),
    new Price(10, new Date(2016, 12, 29), 'M1', 1.5, 22, 2),
    new Price(11, new Date(2017, 1, 8), 'Jakaś chujowa długa nazwa', 0.3, 4, 2),
    new Price(12, new Date(2017, 2, 3), 'Jakaś chujowa długa nazwa znów', 0.5, 6, 2)
  ],
  [
    new Price(7, new Date(2017, 2, 2), 'Dupa raz', 1, 18.9, 3),
    new Price(8, new Date(2017, 3, 2), 'Dupa dwa', 1, 19.5, 3),
    new Price(9, new Date(2017, 4, 2), 'Dupa trzy', 1, 19, 3)
  ],
  [
    // empty data, why not? :)
  ]
];
