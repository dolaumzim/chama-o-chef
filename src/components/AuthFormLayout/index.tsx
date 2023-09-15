import { ReactNode } from 'react';

interface AuthFormLayoutProps {
  children: ReactNode;
}

const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthFormLayout;
