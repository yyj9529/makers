import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/submit-page";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitPage(props: Route.ComponentProps) {
  return <div>Submit Page</div>;
} 