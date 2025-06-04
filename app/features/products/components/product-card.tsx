import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { MessageCircleIcon, ChevronUpIcon } from "lucide-react";

interface ProductCardProps {
  productId: string;
  productName: string;
  productDescription: string;
  commentCount: number;
  upvoteCount: number;
}

export function ProductCard({
  productId,
  productName,
  productDescription,
  commentCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${productId}`}>
      <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50 ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            <h3>{productName}</h3>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            <p>{productDescription}</p>
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-px text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 