import { GitHubProjectsLink } from "./styled";
import { useState, useEffect } from "react";

export const PersonalHomepageRepo = () => {
    return (
<GitHubProjectsLink href="https://github.com/MarcinBawolik/Personal-Homepage">
            Personal-Homepage Repository
            </GitHubProjectsLink>
    );
};
export const FetchPersonalHomepage = () => {
    const [repoUrl, setRepoUrl] = useState("");
  
    useEffect(() => {
      fetch("https://api.github.com/user/defunkt", {
        headers: {
          Authorization: `token ${process.env.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}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Załóżmy, że chcesz dodać link do repozytorium o nazwie "my-project"
          const personalHomepage = data.find((repo) => repo.name === "Personal-Homepage");
          const url = personalHomepage.html_url;
          setRepoUrl(url);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          Link do mojego repozytorium
        </a>
      </div>
    );
  };