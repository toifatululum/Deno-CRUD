import { App } from 'https://deno.land/x/alosaur@v0.14.0/src/mod.ts';
import { settings } from './app.settings.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";

//create apllication
const app = new App(settings)
config({safe:true})
app.listen();