const axios = require('axios');

exports.getTopGoogleRepos = async () => {
  const githubResponse = await axios.get('https://api.github.com/users/google/repos');
  const allRepos = githubResponse.data;

  const reposSortedByStars = allRepos.sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count);
  return reposSortedByStars.slice(0, 10);
};