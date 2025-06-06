import type { Route } from "../../../.react-router/types/app/routes/+types/home";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return {
    title: "Home",
  };
}

export default function HomePage(props: Route.ComponentProps) {
  return <div>Home Page</div>;
}
