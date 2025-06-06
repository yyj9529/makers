import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/promote-page";

export const meta: Route.MetaFunction = () => [
  { title: "Promote Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage(props: Route.ComponentProps) {
  return <div>Promote Page</div>;
} 