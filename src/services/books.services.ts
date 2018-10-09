import {Book} from "../models/Book";

export class BooksServices {

  booksList: Book[] = [
    {
      name: '1984',
      author: 'G.Orwell',
      description: [
        'L’histoire se passe à Londres en 1984, comme l\'indique le titre du roman.'
      ],
      isLend: true
    },
    {
      name: 'Bleach ブリーチ',
      author: ' Tite Kubo',
      description: [
        'L\'histoire de Bleach se déroule dans une version alternative de notre monde où des shinigami,',
        'les dieux de la mort, protègent l\'espèce humaine et les âmes des morts des hollows, forme bestiale des âmes perdues.'
      ],
      isLend: false
    },
    {
      name: 'Le Hobbit',
      author: 'J. R. R. Tolkien',
      description: [
        'Le Hobbit (The Hobbit) ou Bilbo le Hobbit est un roman de fantasy de l\'écrivain britannique J. R. R. Tolkien.',
        'Il narre les aventures du hobbit Bilbo (ou Bilbon), entraîné malgré lui par le magicien Gandalf et une compagnie de treize nains dans leur voyage vers la Montagne Solitaire,',
        'à la recherche du trésor gardé par le dragon Smaug.'
      ],
      isLend: false
    }
  ];

}
