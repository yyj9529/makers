import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/search-page";

export const meta: Route.MetaFunction = () => [
  { title: "Search Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SearchPage(props: Route.ComponentProps) {
  return <div>Search Page</div>;
} 