export const fetchHackerNews = async () => {
	const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  return await response.json();
}

export const fetchHackerStory = async storyId => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
  return await response.json();
}
