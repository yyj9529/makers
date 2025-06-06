import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/leaderboard-page";

export const meta: Route.MetaFunction = () => [
  { title: "Categories | ProductHunt Clone" },
  { name: "description", content: "Browse products by category" },
];

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [], // Add categories fetch logic
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      {/* Add categories grid */}
    </div>
  );
} 