import 'source-map-support/register';

import * as util from '../src/util';
import { getResult } from '../src/main';

describe('Test function "getResult"', () => {

    // This test succeeds
    it('Should successfully be executed', async () => {
        const func = async () => { return await getResult() };
        const expected = ['A', 'B', 'C'];

        await expect(func()).resolves.toEqual(expected);

    });

    // This test fails, although it shouldn't
    it('Should successfully be executed despite mocked rejection (mockImplementationOnce)', async () => {
        const provideResultMock = jest.spyOn(util, 'provideResult');
        provideResultMock.mockImplementationOnce(() => Promise.reject('mocked rejection'));

        const func = async () => { return await getResult() };
        const expected = ['A', 'B', 'C'];

        await expect(func()).resolves.toEqual(expected);

    });

    // This test fails, although it shouldn't
    it('Should successfully be executed despite mocked rejection (mockRejectedValueOnce)', async () => {

        const provideResultMock = jest.spyOn(util, 'provideResult');
        provideResultMock.mockRejectedValueOnce('mocked rejection');

        const func = async() => getResult();
        const expected = ['A', 'B', 'C'];

        await expect(func()).resolves.toEqual(expected);

    });

    // This test will timeout, if it isn't skipped
    it.skip('Should successfully be executed, but wrong result due to mocked implementation', async () => {

        const provideResultMock = jest.spyOn(util, 'provideResult');
        provideResultMock.mockImplementationOnce(() => Promise.resolve(['mocked result']));

        const func = async () => { return await getResult() };
        const expected = ['A', 'B', 'C'];

        await expect(func()).resolves.not.toEqual(expected);
    });
    
    // This test will timeout, if it isn't skipped
    it.skip('Should successfully be executed, but wrong result due to mocked resolved value', async () => {

        const provideResultMock = jest.spyOn(util, 'provideResult');
        provideResultMock.mockResolvedValueOnce(['mocked result']);

        const func = async () => { return await getResult() };
        const expected = ['A', 'B', 'C'];

        await expect(func()).resolves.not.toEqual(expected);
    });
})
