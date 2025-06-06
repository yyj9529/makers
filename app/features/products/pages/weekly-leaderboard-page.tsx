import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/weekly-leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Weekly Leaderboard Page" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function WeeklyLeaderboardPage(props: Route.ComponentProps) {
  return <div>Weekly Leaderboard Page</div>;
} 