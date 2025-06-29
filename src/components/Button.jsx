const Button = ({ text, className, id, href, target = "_self" }) => {
  return (
    <a
      href={href ?? "#"}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${className ?? ""} cta-wrapper`}
      id={id}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="./images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
