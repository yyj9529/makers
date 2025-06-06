import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/categories-page";

export const meta: Route.MetaFunction = () => [
  { title: "Categories Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function CategoriesPage(props: Route.ComponentProps) {
  return <div>Categories Page</div>;
} 