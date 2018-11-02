export const fetchHackerNewsList = async () => {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/newstories.json',
    );
    if (response.status < 300) return await response.json();
    throw new Error(`Unable to fetch story list - status ${response.status}`);
  } catch (error) {
    throw new Error(`fetchHackerNewsList error: ${error.message}`);
  }
};

export const fetchHackerNewsStory = async storyId => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
    );
    if (response.status < 300) return await response.json();
    throw new Error(
      `Unable to fetch news story with id=${storyId} - status ${
        response.status
      }`,
    );
  } catch (error) {
    throw new Error(`fetchHackerNewsStory error: ${error.message}`);
  }
};
