interface AuthWapperProps {
  children: React.ReactNode;
  condition: boolean;
}

export const AuthWapper = ({ children, condition }: AuthWapperProps) => {
  return condition && children;
};
