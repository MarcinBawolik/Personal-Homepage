import { useGithubRepoLink } from "../GitHubProjects/useGithubRepoLink";
import { Spinner } from "./styled";

export const PersonalHomepage = () => {
  const { state, repoLink } = useGithubRepoLink({
    repoName: "Personal-Homepage",
  });

  if (state === "loading") {
    return (
      <div>
        Please wait, projects are being loaded...
        <Spinner />
      </div>
    );
  }

  if (state === "error") {
    return (
      <div>
        Ooops! Something went wrong...
        <p>
          Sorry, failed to load Github projects. You can check them directly on
          Github.
        </p>
      </div>
    );
  }

  return (
    <a href={repoLink} target="_blank" rel="noopener noreferrer">
      Link to the repository
    </a>
  );
};
export const TasksListReact = () => {
  const { state, repoLink } = useGithubRepoLink({
    repoName: "Tasks-list-react",
  });

  if (state === "loading") {
    return (
      <div>
        Please wait, projects are being loaded...
        <Spinner />
      </div>
    );
  }

  if (state === "error") {
    return (
      <div>
        Ooops! Something went wrong...
        <p>
          Sorry, failed to load Github projects. You can check them directly on
          Github.
        </p>
      </div>
    );
  }

  return (
    <a href={repoLink} target="_blank" rel="noopener noreferrer">
      Link to the repository
    </a>
  );
};
