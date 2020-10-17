const BASE_URL = 'https://api.github.com';

export const getRepoInfo = ({ owner, name }) => {
  console.log(owner, name)
  return fetch(`${BASE_URL}/repos/${owner}/${name}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

export const getCommitCount = ({ owner, name }) => {
  const COUNT_REGEX = /(?<count>\d+)[^,.\d\n]+?(?=rel="last")/;
  return fetch(`${BASE_URL}/repos/${owner}/${name}/commits?per_page=1`)
    .then(response => {
      if (response.ok) {
        return response.headers
          .get('Link')
          .match(COUNT_REGEX)
          .groups
          .count
      } else {
        throw new Error(response.status);
      }
    })
}
