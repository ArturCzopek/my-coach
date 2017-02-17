import {Report} from "../get.entities";

export let REPORTS_LIST: Report[] = [
  null, // padding for test issues
  new Report(1, 'Mogło byc lepiej, forma bez zmian...', new Date(2016, 10, 8), new Date(2016, 10, 14)),
  new Report(2, 'Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat' +
    ' Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat Testowy komunikat ',
    new Date(2016, 10, 15), new Date(2016, 10, 21)),
  new Report(3, 'Lipa kolego', new Date(2016, 10, 22), new Date(2016, 10, 28))
];
