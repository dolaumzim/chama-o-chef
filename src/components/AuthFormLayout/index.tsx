import { ReactNode } from 'react';

interface AuthFormLayoutProps {
  children: ReactNode;
}

const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  );
};

export default AuthFormLayout;
