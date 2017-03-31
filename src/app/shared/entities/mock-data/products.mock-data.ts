import {Product} from "../get.entities";

export let PRODUCTS_LIST: Product[] = [
  new Product(1,
    'Kurczak',
    'https://vignette2.wikia.nocookie.net/kielbasa/images/a/ad/Kurczak.jpg/revision/latest?cb=20130323205029&path-prefix=pl',
    16.24
  ),
  new Product(2,
    'Indyk',
    'https://media-cache-ak0.pinimg.com/736x/75/3f/9a/753f9a186a18e67f1820ec56508dccd2.jpg',
    19.12
  ),
  new Product(3,
    'Serek wiejski',
    'https://piatnica.com.pl/p/public/upload/product/yyt2ck3efd0ih642jm4ai2rws.jpg',
    1.55
  ),
  new Product(4,
    'Masło',
    'https://www.jakkupowac.pl/vars/upload/fckeditor/image/maslo/maslo_estra_mlekpol.jpg',
    4.18
  )
];
