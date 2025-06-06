import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";

interface JobCardProps {
  id: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  title: string;
  posteAt: string;
  type: string;
  salary: string;
  positionLocation: string;
}

export function JobCard({
  id,
  company,
  companyLogoUrl,
  companyHq,
  title,
  posteAt,
  type,
  positionLocation,
  salary,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img
              src={companyLogoUrl}
              alt="Company Logo"
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{posteAt}</span>
            </div>
          </div>
          <CardTitle>
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
           <Badge key={type} variant="outline">{type}</Badge>
           <Badge key={positionLocation} variant="outline">{positionLocation}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {companyHq}
            </span>
          </div>
          <Button variant="secondary" size="sm">Apply Now</Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 