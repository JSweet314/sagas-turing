import {fetchHackerNewsList, fetchHackerNewsStory} from './fetchHackerNews';

describe('fetchHackerNews', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: jest.fn(() => Promise.resolve([])),
      }),
    );
  });

  it('should call fetch with the right params', () => {
    const expected = 'https://hacker-news.firebaseio.com/v0/newstories.json';
    fetchHackerNewsList();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a json parsed response', async () => {
    await expect(fetchHackerNewsList()).resolves.toEqual([]);
  });

  it('should throw an error if appropriate', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404,
        ok: false,
        json: jest.fn(),
      }),
    );

    const expected = Error(
      `fetchHackerNewsList error: Unable to fetch story list - status 404`,
    );
    await expect(fetchHackerNewsList()).rejects.toEqual(expected);
  });
});

describe('fetchHackerNewsStory', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: jest.fn(() => Promise.resolve([])),
      }),
    );
  });

  it('should call fetch with the right params', () => {
    const expected = 'https://hacker-news.firebaseio.com/v0/item/1.json';
    fetchHackerNewsStory(1);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a json parsed response', async () => {
    const expected = [];
    await expect(fetchHackerNewsStory(1)).resolves.toEqual(expected);
  });

  it('should throw an error if appropriate', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 404,
        ok: false,
        json: jest.fn(),
      }),
    );

    const expected = Error(
      'fetchHackerNewsStory error: Unable to fetch news story with id=1 - status 404',
    );

    await expect(fetchHackerNewsStory(1)).rejects.toEqual(expected);
  });
});
