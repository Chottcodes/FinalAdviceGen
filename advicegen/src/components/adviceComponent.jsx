import React, { useEffect, useState } from "react";
import "../styles/component.css";
import dividerMobile from '../../public/assets/dividermobile.svg';
import dividerDesktop from '../../public/assets/dividerdesktop.svg';
import icondice from '../../public/assets/icondice.svg';
const AdviceComponent = () => {
  const [adviceNumber, setAdviceNumber] = useState("");
  const [adviceQuote, setAdviceQuote] = useState("");
  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceNumber(data.slip.id);
    setAdviceQuote(data.slip.advice);
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="w-[90%] h-[55%] md:h-[55%] md:w-[60%] lg:w-[35%] lg:h-[50%] rounded-2xl bg-[#323a49] relative transition-all duration-500 ease-in-out shadow-[0px_0px_33px_1px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col items-center gap-5 justify-center w-[80%] h-[70%] m-auto">
        <p className="text-[#52ffa8] lg:text-xl tracking-widest">
          Advice #{adviceNumber}
        </p>
        <h1 className="text-[20px] lg:text-[28px] text-[#d4e5ff] break-words text-center ">
          "{adviceQuote}"
        </h1>
      </div>
      <div className="w-full h-[10%] flex justify-center pt-10 items-center">
        <img className="md:hidden" src={dividerMobile} alt="divider"/>
        <img className="hidden md:block w-[90%]" src={dividerDesktop} alt="divider"/>
      </div>
      <div className="w-full h-0 bg-amber-100 flex justify-center items-center absolute bottom-0">
        <button
          onClick={getAdvice}
          className="w-[70px] h-[70px] lg:w-[65px] lg:h-[65px] hover:shadow-[0px_0px_47px_21px_rgba(82,255,168,0.2)] bg-[#52ffa8] rounded-full flex justify-center items-center"
        >
          <img
            className="w-[30px]"
            src={icondice}
            alt="Dice Icon"
          />
        </button>
      </div>
    </div>
  );
};
export default AdviceComponent;
