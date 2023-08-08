import express, { Express, Response, Request } from 'express';

let app: Express = express();
let PORT: number = 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send('hello, welcome to EXPRESS!');
});

app.get('/world', (req: Request, res: Response): void => {
  res.send('hello world!');
});

app.listen(PORT, (): void => {
  console.log(`Server listening on ${PORT}`);
});
