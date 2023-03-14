import { useState, useEffect } from "react";

export const useGithubRepoLink = ({ repoName }) => {
  const [getRepo, setGetRepo] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRepoLink = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/MarcinBawolik/${repoName}`
        );

        if (!response.ok) {
          throw new Error("Error fetching repository");
        }
        const data = await response.json();
        const repoLink = data.html_url;
        return setGetRepo({
          state: "succes",
          repoLink,
        });
      } catch {
        setGetRepo({
          state: "error",
        });
      }
    };

    setTimeout(fetchRepoLink, 4000);
  }, []);

  return getRepo;
};
