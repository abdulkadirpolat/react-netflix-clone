import "./footer.css";

const Footer = ({ className, children, props }) => {
  return (
    <footer className={`${"footer-container"}`}>
      <div className={`${className ? className : ""} max-w-5xl mx-auto h-full `} {...props}>
        {children ? children : "Hello footer"}
      </div>
    </footer>
  );
};

export default Footer;
