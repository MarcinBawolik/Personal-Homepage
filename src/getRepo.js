export async function getRepositories() {
    const username = 'MarcinBawolik';
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

    