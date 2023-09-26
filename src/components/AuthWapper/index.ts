interface AuthWapperProps {
  children: JSX.Element;
  condition: boolean;
}

export const AuthWapper = ({ children, condition }: AuthWapperProps) => {
  return condition && children;
};
