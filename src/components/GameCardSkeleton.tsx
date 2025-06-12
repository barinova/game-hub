import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={250}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
