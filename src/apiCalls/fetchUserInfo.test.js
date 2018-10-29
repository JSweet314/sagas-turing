import fetchUserInfo from './fetchUserInfo';

describe('fetchUserInfo', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve({ username: 'jsweet314' })
      })
    );
  });

  it('should call fetch with the correct params', () => {
    const mockUsername = 'jsweet314';
    const expected = `https://api.github.com/users/${mockUsername}`;
    fetchUserInfo(mockUsername);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a JSON parsed response', async () => {
    const expected = { username: 'jsweet314' };
    const result = fetchUserInfo('jsweet314');
    await expect(result).resolves.toEqual(expected);
  });

  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false
      })
    );
    const expected = new Error('Error - GitHub User Not Found');
    await expect(fetchUserInfo('NonexistentUser')).rejects.toEqual(expected);
  });
});
