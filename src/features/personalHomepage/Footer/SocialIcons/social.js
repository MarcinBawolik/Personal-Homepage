import { StyledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "../../../../images/github.svg";
import { ReactComponent as LinkedInIcon } from "../../../../images/linkedin.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/MarcinBawolik",
    Icon: StyledIcon(GithubIcon),
  },
  {
    name: "LinedIn",
    url: "https://pl.linkedin.com",
    Icon: StyledIcon(LinkedInIcon),
  },
];
