import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/category-page";

export const meta: Route.MetaFunction = () => [
  { title: "Category Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function CategoryPage(props: Route.ComponentProps) {
  return <div>Category Page</div>;
} 