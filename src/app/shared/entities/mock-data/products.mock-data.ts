import {Product} from "../get.entities";

export let PRODUCTS_LIST: Product[] = [
  new Product(1,
    'Kurczak',
    'https://vignette3.wikia.nocookie.net/zapytaj-beczke/images/5/5a/Pan_kurczak.jpg/revision/latest?cb=20150408185634&path-prefix=pl',
    16.24
  ),
  new Product(2,
    'Indyk',
    'https://cdn8.se.smcloud.net/t/photos/108615/sennik_indyk_znaczenie_snu_indyk.jpg',
    19.12
  ),
  new Product(3,
    'Serek wiejski',
    'https://vignette2.wikia.nocookie.net/kielbasa/images/a/ad/Kurczak.jpg/revision/latest?cb=20130323205029&path-prefix=pl',
    1.55
  ),
  new Product(4,
    'Masło',
    'https://polki.pl/pub/wieszjak/p/_wspolne/pliki_infornext/575000/maslo.jpg',
    4.18
  )
];
