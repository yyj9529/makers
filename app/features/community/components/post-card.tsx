import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardFooter } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface PostCardProps {
  postId: string;
  avatarSrc: string;
  title: string;
  author: string;
  category: string;
  timeAgo: string;
}

export function PostCard({
  postId,
  avatarSrc,
  title,
  author,
  category,
  timeAgo,
}: PostCardProps) {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src={avatarSrc} />
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{author}</span>
              <span>{category}</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
          Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 