import React from "react";

import Header from "./header/header.component";
import Footer from "./footer/footer.component";

const Layout = ({ children, noOverlayHeader }) => {
  const mainMenu =[
    {text: 'home', url: '/'},
    {text: 'websites', url: '/websites'},
    {text: 'about', url: '/about'},
    {text: 'our work', url: '/case-studies'},
    {text: 'news', url: '/news'},
  ]
  const footerMenu =[
    {text: 'Privacy', url: '/privacy'},
    {text: 'Terms', url: '/terms'},
    {text: 'Sitemap', url: '/sitemap'},
    {text: 'Contact', url: '/contact'},
  ]
  return (
    <div className="min-h-screen">
      <Header noOverlay={noOverlayHeader} menu={mainMenu} />
      <main>
        {children}
      </main>
      <Footer menu={footerMenu} />
    </div>
  );
}

export default Layout;
