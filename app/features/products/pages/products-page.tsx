import { redirect } from "react-router";
import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/products-page";

export const meta: Route.MetaFunction = () => [
  { title: "Products Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return redirect("/products/leaderboards");
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function ProductsPage(props: Route.ComponentProps) {
  return <div>Products Page</div>;
} 