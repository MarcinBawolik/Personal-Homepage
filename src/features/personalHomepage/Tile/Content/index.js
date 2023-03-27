import { Error } from "./Error";
import { Success } from "./Success";
import { Loading } from "./Loading";

export const Content = ({ status, projects }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <Error />;

    case "success":
      return <Success projects={projects} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
