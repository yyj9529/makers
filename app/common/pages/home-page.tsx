import { Link } from "react-router-dom";
import type { MetaFunction } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { MessageCircleIcon, ChevronUpIcon, Car } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";

export const meta : MetaFunction =()=> {
  return[
    {title : "Home | makers"},
    {name : "description", content : "Welcome to makers"}
  ];
}

export default function HomePage() {
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
    </div>
  );
}