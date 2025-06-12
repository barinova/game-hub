import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export const GameCardSkeleton = () => {
  return (
    <Card width={300} borderRadius={8}>
      <Skeleton height={200}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
