export const fetchUserInfo = async gitHubUsername => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${gitHubUsername}`
    );
    if (response.status < 300) {
      return await response.json();
    }
    throw new Error('Error - GitHub User Not Found');
  } catch (error) {
    throw error;
  }
};

export default fetchUserInfo;
