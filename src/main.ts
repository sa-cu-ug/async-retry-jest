import 'source-map-support/register';

import async from 'async';
import { provideResult } from './util';

export async function getResult(): Promise<string[]> {
    return async.retry<string[]>(provideResult);
}
