import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/daily-leaderboard-page";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import {z} from "zod";
import { LeaderboardHeader } from "~/common/components/ui/leaderboard-header";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year : z.coerce.number(),
  month : z.coerce.number(),
  day : z.coerce.number(),
});


export const meta: Route.MetaFunction = () => [
  { title: "Daily Leaderboard Page" },
];

export const loader =({params}:Route.LoaderArgs)=>{
    const {success,data:parsedData} = paramsSchema.safeParse(params);


    if(!success){
      throw data({
        error_code : "invalid_params",
        message : "Invalid params",
      },{
        status : 400
      });
    }
    const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

    if(!date.isValid){
      throw data({
        error_code : "invalid_date",
        message : "Invalid data",
      },{
        status : 400
      }
    );
    }
    const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
    console.log("today...",today);
    console.log("date > today...",date > today);
    if(date > today){
      throw data(
        {
          error_code : "future_date",
          message : "Future date",
        },
        {
          status : 400
        }
      );
    }
    console.log("...parsedData",parsedData);
    return {
      ...parsedData
    }
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function DailyLeaderboardPage({loaderData}: Route.ComponentProps) {

   const urldate = DateTime.fromObject(loaderData).setZone("Asia/Seoul");
   const previousDay = urldate.minus({days:1});
   const nextDay = urldate.plus({days:1});
   const isToday = urldate.equals(DateTime.now().startOf("day"));

    return(
      <div className="space-y-10">
          <LeaderboardHeader
          title={urldate.toLocaleString(DateTime.DATE_MED)}
          description="The most popular products on maksers"
        />
      <div className="flex items-center justify-center gap-2">
          <Button variant="outline" asChild>
            <Link to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}>
              &larr;{previousDay.toLocaleString(DateTime.DATE_SHORT)}
            </Link>
          </Button>
        {isToday ? (
          <Button variant="outline" asChild>
            <Link to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}>
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div> 
      
      <div className="space-y-5 w-full max-x-screen-md mx-auto">
          {Array.from({length:10}).map((_,index)=>(  
              <ProductCard 
                key={index} 
                productId={`productId-${index}`} 
                productName="Sample Product Name" 
                productDescription="This is a sample product description." 
                commentCount={12} 
                upvoteCount={120}
                />
            ))}
      </div>
     <ProductPagination totalPages={10} />
    </div>
    )
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
