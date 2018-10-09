import {Cd} from "../models/Cd";

export class CdsServices {

  cdsList: Cd[] = [
    {
      name: 'Vertigo',
      author: 'Metallica',
      description: [
        'Enter Sandman',
        'Sad but True',
        'Holier than Thou',
        'The Unforgiven',
        'Wherever I May Roam',
        'Don\'t Tread on Me',
        'Through the Never',
        'Nothing Else Matters',
        'Of Wolf and Man',
        'The God That Failed',
        'My Friend of Misery',
        'The Struggle Within'
      ],
      isLend: true
    },
    {
      name: 'Adema',
      author: 'Adema',
      description: [
        'Everyone',
        'Blow It Away',
        'Giving In',
        'Freaking Out (Adema & Bill Appleberry)',
        'The Way You Like It',
        'Close Friends',
        'Do What You Want to Do',
        'Skin (Adema, Mike Montano & Eric Jackson)',
        'Pain Inside',
        'Speculum',
        'Drowning',
        'Trust',
        'Shattered (Japanese Bonus Track)'
      ],
      isLend: true
    },
    {
      name: 'Staind',
      author: 'Staind',
      description: [
        'Eyes Wide Open',
        'Not Again',
        'Failing',
        'Wannabe',
        'Throw it All Away',
        'Take a Breath',
        'The Bottom',
        'Now',
        'Paper Wings',
        'Something To Remind You'
      ],
      isLend: false
    }
  ];

}
