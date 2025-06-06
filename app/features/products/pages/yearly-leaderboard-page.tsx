import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/yearly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Yearly Leaderboard Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function YearlyLeaderboardPage(props: Route.ComponentProps) {
  return <div>Yearly Leaderboard Page</div>;
} 