export class Task {
  id : number = Date.now();
  title: string= '';
  done: boolean= false;
  icon: number =  Math["floor"](Math.random() * 12);
}