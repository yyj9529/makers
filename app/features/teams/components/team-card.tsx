import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardFooter } from '~/common/components/ui/card';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';

interface TeamCardProps {
  teamId: string;
  username: string;
  userAvatarUrl: string;
  roles: string[];
  projectDescription: string;
}

export function TeamCard({
  teamId,
  username,
  userAvatarUrl,
  roles,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${teamId}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary" className="inline-flex shadow-sm items-center text-base">
              <span>@{username}</span>
              <Avatar className="size-5">
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                <AvatarImage src={userAvatarUrl} />
              </Avatar>
            </Badge>
            is looking for
            {roles.map((role) => (
              <Badge key={role} className="text-base">
                {role}
              </Badge>
            ))}
            <span>to build</span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="justify-end">
          <Button variant="link">
            Join team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 