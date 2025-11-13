import { Review } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="p-4 shadow-sm">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={review.author.avatarUrl} />
          <AvatarFallback>{review.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{review.author.name}</p>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="mt-2 text-muted-foreground">{review.comment}</p>
        </div>
      </div>
    </Card>
  );
}
