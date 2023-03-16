import React from 'react';
interface FooterProps {
  children?: any;
}
function Footer({ children }: FooterProps) {
  return (
    <div>
      <p>Footer</p>
      {children}
    </div>
  );
}

export default Footer;
