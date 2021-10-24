import "./footer.css";

const Footer = ({ className, children, ...props }) => {
  return (
    <footer className={`${"footer-container"}`}>
      <div className={`${className ? className : ""} max-w-5xl-1 mx-auto h-full w-11/12 `} {...props}>
        {children ? children : ""}
      </div>
    </footer>
  );
};

export default Footer;
