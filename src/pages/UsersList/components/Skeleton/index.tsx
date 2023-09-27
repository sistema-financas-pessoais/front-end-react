import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonUsersList = () => {
  return (
    <Box sx={{ width: '100%' }} className="w-full">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
};
