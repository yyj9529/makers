import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/monthly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Monthly Leaderboard Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function MonthlyLeaderboardPage(props: Route.ComponentProps) {
  return <div>Monthly Leaderboard Page</div>;
} 