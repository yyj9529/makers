import { Button } from "~/common/components/ui/button";
import type { Route } from "../../../../.react-router/types/app/features/products/pages/+types/leaderboard-page";
import { LeaderboardHeader } from "../../../common/components/ui/leaderboard-header";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router-dom";

export const meta: Route.MetaFunction = () => [
  { title: "Leaderboard |  Makers" },
  { name: "description", content: "Top products leaderboard" },
];



export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-20">
      <LeaderboardHeader
        title="Leaderboards"
        description="The most popular products on maksers"
      />

    <div className="grid grid-cols-3 gap-4 px-20">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">Daily Leaderboard</h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on makers by day</p>
        
        </div>
        
         {Array.from({length:7}).map((_,index)=>(  
          <ProductCard 
            key={index} 
            productId={`productId-${index}`} 
            productName="Sample Product Name" 
            productDescription="This is a sample product description." 
            commentCount={12} 
            upvoteCount={120}
            />
         ))}
      <Button variant="link" asChild className="text-lg self-center">
        <Link to="/products/leaderboards/daily">
         Explore all products &rarr;
        </Link>
      </Button>
         
    </div>




    <div className="grid grid-cols-3 gap-4 px-20">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">Weekly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on makers by Week</p>
        
        </div>
        
         {Array.from({length:7}).map((_,index)=>(  
          <ProductCard 
            key={index} 
            productId={`productId-${index}`} 
            productName="Sample Product Name" 
            productDescription="This is a sample product description." 
            commentCount={12} 
            upvoteCount={120}
            />
         ))}
      <Button variant="link" asChild className="text-lg self-center">
        <Link to="/products/leaderboards/weekly">
         Explore all products &rarr;
        </Link>
      </Button>
    </div>

    <div className="grid grid-cols-3 gap-4 px-20">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">Monthly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on makers by Month</p>
        
        </div>
        
         {Array.from({length:7}).map((_,index)=>(  
          <ProductCard 
            key={index} 
            productId={`productId-${index}`} 
            productName="Sample Product Name" 
            productDescription="This is a sample product description." 
            commentCount={12} 
            upvoteCount={120}
            />
         ))}
      <Button variant="link" asChild className="text-lg self-center">
        <Link to="/products/leaderboards/monthly">
         Explore all products &rarr;
        </Link>
      </Button>
    </div>

    <div className="grid grid-cols-3 gap-4 px-20">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">Yearly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on makers by Yearly</p>
        
        </div>
        
         {Array.from({length:7}).map((_,index)=>(  
          <ProductCard 
            key={index} 
            productId={`productId-${index}`} 
            productName="Sample Product Name" 
            productDescription="This is a sample product description." 
            commentCount={12} 
            upvoteCount={120}
            />
         ))}
      <Button variant="link" asChild className="text-lg self-center">
        <Link to="/products/leaderboards/yearly">
         Explore all products &rarr;
        </Link>
      </Button>
    </div>

    </div>
  );
} 