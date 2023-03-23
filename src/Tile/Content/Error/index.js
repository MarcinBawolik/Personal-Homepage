import { ReactComponent as Danger } from "../../../images/danger.svg";

export const Error = () => (
  <div>
    <Danger />
    Ooops! Something went wrong...
    <p>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </p>
    <a href={`https://github.com/MarcinBawolik`} target="_blank">Go to Github</a>
  </div>
);
