import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/daily-leaderboard-page";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse } from "react-router";

export const meta: Route.MetaFunction = () => [
  { title: "Daily Leaderboard Page" },
];

export const loader =({params}:Route.LoaderArgs)=>{
    const {year,month,day} = params;
    const date = DateTime.fromObject({
      year : Number(year),
      month : Number(month),
      day : Number(day),
    }).setZone("Asia/Seoul");

    if(!date.isValid){
      throw data({
        error_code : "invalid_date",
        message : "Invalid data",
      },{
        status : 400
      }
    );
    }
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function DailyLeaderboardPage(props: Route.ComponentProps) {
  return <div>Daily Leaderboard Page</div>;
} 

export function ErrorBoundary({error}:Route.ErrorBoundaryProps){
  if(isRouteErrorResponse(error)){
    return <div>{error.data.message} / {error.data.error_code}</div>
  }
  if(error instanceof Error){
    return <div>{error.message}</div>
  }
  return <div>Unknown error happened</div>;
}
