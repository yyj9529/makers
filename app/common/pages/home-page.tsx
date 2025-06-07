import { Link } from "react-router-dom";
import type { MetaFunction } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "../components/ui/card";
import { MessageCircleIcon, ChevronUpIcon, Car, EyeIcon, DotIcon, HeartIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { Badge } from "../components/ui/badge";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import type { Route } from "../../../../.react-router/types/app/common/pages/+types/home-page";

export function loader({ request }: Route.LoaderArgs) {
  console.log("hello");
  return {
    hello : "world",
    hello2 : "world2"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Common Home Page" },
  ];
}

export default function CommonHomePage(props: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4 px-20">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
         <Button variant="link" asChild className="text-lg p-0">
           <Link to="/community">Explore all products &rarr;</Link>
         </Button>
        </div>
        
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
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            postId={`postId-${index}`}
            title="What is the best productivity tool?"
            author="Nico"
            avatarSrc="https://github.com/apple.png"
            category="Productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>


      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>


        {Array.from({length:10}).map((_,index)=>(
          <IdeaCard 
            ideaId="ideaId"
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress."
            views={123}
            timeAgo="12 hours ago"
            likes={123}
            claimed={index %2 ===0}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
            {
              <JobCard
              id="jobId"
              company="Tesla Motors"
              companyLogoUrl="https://github.com/teslamotors.png"
              companyHq="San Francisco, CA"
              title="Software Engineer"
              posteAt="12 hours ago"
              type="Full-Time"
              salary="$100,000 - $120,000"
              positionLocation="Remote"
              />
            }
       
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate.
          </h2>
          <p className="text-xl font-light text-foreground">
           Join a team looking for a new member
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>

        {Array.from({length:5}).map((_,index)=>(
           <TeamCard
            teamId="teamId"
            username="lynn"
            userAvatarUrl="https://github.com/inthetiger.png"
            roles={["React Developer", "Backend Developer", "Product Manager"]}
            projectDescription="A new social media platform"
           />
        ))}
      </div>
  
    </div>
  );
}