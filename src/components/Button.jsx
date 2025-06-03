const Button = ({ text, className, id }) => {
  return (
    <a 
    onClick={(e)=>{
      e.preventDefault();
      const target = document.getElementById("counter"); // Target jahan tak le jaana hai

      if(target && id){
        const offset = window.innerHeight * 0.15; //15% screen height ka offset set karte ho (taaki thoda upar space mile jab scroll ho)
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth"
        })
      }
    }}      

    className={`${className ?? ""} cta-wrapper`}> {/*Concatenation of classes*/}
      <div className="cta-button group">
        <div className="bg-circle" /> {/*Same kaam karte hai div jaise hi bas empty h*/}
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="./images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a> //Call to action
  );
};

export default Button;
