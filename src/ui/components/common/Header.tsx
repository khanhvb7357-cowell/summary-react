import React from 'react';
interface HeaderProps {
  children?: any;
}
function Header({ children }: HeaderProps) {
  return (
    <div>
      <p>Header</p>
      {children}
    </div>
  );
}

export default Header;
