
import { BooksArea } from './src/books/books.area.ts';
import { AppSettings } from 'https://deno.land/x/alosaur@v0.14.0/src/mod.ts';
import { Log } from './src/global/middleware/log.middleware.ts';

export const settings:AppSettings= {
    areas: [BooksArea],
    middlewares: [Log],
    logging: false
};