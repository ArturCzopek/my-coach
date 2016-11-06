import {Price} from "../GetEntities";

export let PRICES_LIST: [Price[]] = [
  [null], //don't change function special for mock data so I've added 'padding'
  [
    new Price(1, new Date(2016, 8, 9), 'Auchan', 1, 13.5),
    new Price(3, new Date(2016, 9, 9), 'M1', 1, 14.2),
    new Price(5, new Date(2016, 10, 9),'Auchan', 1, 13.6)
  ],
  [
    new Price(2, new Date(2016, 8, 9), 'Auchan', 1, 18.9),
    new Price(4, new Date(2016, 9, 9), 'M1', 1, 19.5),
    new Price(6, new Date(2016, 10, 9), 'Auchan', 1, 19)
  ]
]
