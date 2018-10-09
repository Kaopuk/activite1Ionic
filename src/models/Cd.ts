export class Cd {
  description: string[];
  isLend : boolean;

  constructor(public name: string, public author: string) {
    this.isLend = false;
  }
}
