import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonUsersList = () => {
  return (
    <Box sx={{ width: '100%' }} className="w-full">
      <Skeleton className="dark:bg-slate-400" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
      <Skeleton className="dark:bg-slate-400" animation="wave" />
    </Box>
  );
};
