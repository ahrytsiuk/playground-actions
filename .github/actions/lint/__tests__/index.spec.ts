import * as fs from 'fs';
import {describe, expect, jest, test} from "@jest/globals";

import {readContent} from '../src'
import {beforeEach} from "node:test";

jest.mock('fs');
const mockedFs = jest.mocked(fs);

describe("ExtractInfo", () => {

  beforeEach(() => {
    // Set up some mocked out file info before each test
    jest.clearAllMocks();
  });

  test('Test #1', () => {



    mockedFs.readFileSync.mockReturnValue('Hello World2!' as any);


    expect(readContent('message.txt')).toBe('Hello World2!');
  });

  test('Test #2', () => {



    // mockedFs.readFileSync.mockReturnValue('hello from TS' as any);


    expect(readContent('message.txt')).toBe('Hello World!');
  });
});
