import React, { useEffect, useState } from "react";
import "../styles/component.css";
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
    <div className="w-[90%] h-[60%] md:h-[55%] md:w-[60%] lg:w-[40%] lg:h-[50%] rounded-2xl bg-[#323a49] relative transition-all duration-500 ease-in-out shadow-[0px_0px_33px_1px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col items-center gap-5 justify-center text-lg lg:text-xl w-[80%] h-[50%] m-auto mt-15">
        <p className="text-[#52ffa8] lg:text-2xl tracking-widest">
          Advice #{adviceNumber}
        </p>
        <h1 className="text-[25px] lg:text-[28px] text-[#d4e5ff] break-words text-center ">
          "{adviceQuote}"
        </h1>
      </div>
      <div className="w-full h-[10%] flex justify-center pt-10 items-center">
        <img src="../src/assets/dividermobile.svg" />
      </div>
      <div className="w-full h-0 bg-amber-100 flex justify-center items-center absolute bottom-0">
        <button
          onClick={getAdvice}
          className="w-[70px] h-[70px] hover:shadow-[0px_0px_47px_21px_rgba(82,255,168,0.2)] bg-[#52ffa8] rounded-full flex justify-center items-center"
        >
          <img
            className="w-[30px]"
            src="../src/assets/icon-dice.svg"
            alt="Dice Icon"
          />
        </button>
      </div>
    </div>
  );
};
export default AdviceComponent;
