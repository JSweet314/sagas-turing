export const fetchUserInfo = async gitHubUsername => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${gitHubUsername}`,
    );
    if (response.status < 300) {
      return await response.json();
    }
    throw new Error(`GitHub User Not Found - status ${response.status}`);
  } catch (error) {
    throw new Error(`fetchUser error: ${error.message}`);
  }
};

export default fetchUserInfo;
