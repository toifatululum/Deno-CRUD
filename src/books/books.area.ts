import { Area, container } from 'https://deno.land/x/alosaur@v0.14.0/src/mod.ts';
import { BooksController } from './books.controllers.ts';
 
@Area({
    controllers: [BooksController],
})
 
export class BooksArea {}
