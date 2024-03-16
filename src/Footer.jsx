const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className="footer">{`Copyright © The Taco Stand ${year}`}</footer>;
  };
  
  export default Footer;