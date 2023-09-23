import "./styles.css";
import { ReactNode } from 'react';

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="sidebarLayout">
      <div className="leftHalf"> 
        {/* Frase */}
      </div>
      <div className="rightHalf"> 
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
