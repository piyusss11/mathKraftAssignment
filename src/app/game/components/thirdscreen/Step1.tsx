import { FC, useState } from "react";
import { MixedFraction } from "../../game-state";
import HintSvg from "@/app/assets/hintSvg";

interface Step1Props {
  mixedFraction: MixedFraction;
  mixedFraction2: MixedFraction;
  step: number;
}
interface SecondFractionProps {
  mixedFraction: MixedFraction;
}
const Step1: FC<Step1Props> = ({ mixedFraction, mixedFraction2, step }) => {
  console.log("mixedFraction", mixedFraction);
  const { whole, numerator, denominator } = mixedFraction;
  const [showHint, setShowHint] = useState(false);
  console.log("showHint", showHint);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="max-w-4xl"></div>
      <h1 className="text-2xl text-center font-bold text-pink-500 mb-6">
        Let's do some more now!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-pink-200 rounded-lg flex flex-col gap-4 ">
          <div className="bg-pink-300 h-1/3 w-full flex items-center justify-center">
            <h2 className="p-4 text-lg text-center font-semibold mb-4">
              Mixed Form
            </h2>
          </div>

          <div className="bg-white rounded-lg p-4 w-24 h-24 mx-auto flex gap-2 items-center justify-center">
            <h1 className="text-2xl">{whole}</h1>
            <div className="text-2xl">
              {numerator}
              <div className="border-b border-black w-4 my-1"></div>
              {denominator}
            </div>
          </div>
        </div>
        <div className="bg-pink-300 rounded-lg flex flex-col gap-4 items-center ">
          <div className="p-4 bg-pink-400 h-1/3 w-full">
            <h2 className="text-lg text-center font-semibold mb-4">
              Improper Form
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-2 p-4  ">
            <input
              type="text"
              className="w-16 h-12 border-2 border-gray-300 rounded text-center text-xl"
              aria-label="Numerator"
            />
            <div className="w-16 border-b-2 border-black"></div>
            <input
              type="text"
              className="w-16 h-12 border-2 border-gray-300 rounded text-center text-xl"
              aria-label="Denominator"
            />
          </div>
        </div>

        <div className="bg-[#F4D8C5]  rounded-lg  flex gap-4 flex-col items-center">
          <div className="p-4 bg-[#f7e4d6]  h-1/3 w-full">
            <h2 className="text-lg text-center font-bold mb-4">Hint</h2>
          </div>
          {showHint ? (
            <div
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 border-4 cursor-pointer border-[#AD4600] scale-50 rounded-lg p-4 bg-white"
            >
              <HintSvg />
            </div>
          ) : (
            <button
              onClick={() => setShowHint(!showHint)}
              className="bg-white font-semibold mt-6 px-4 py-2 rounded shadow hover:shadow-md transition-shadow"
            >
              See hint
            </button>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-4"></div>
      {/* { second fraction} */}
      {step === 1
      && <SecondFraction mixedFraction={mixedFraction2} />
      }
    </div>
  );
};

 const SecondFraction:FC<SecondFractionProps> = ({ mixedFraction}) => {
  const { whole, numerator, denominator } = mixedFraction;
  const [showHint, setShowHint] = useState(false);
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-pink-200 rounded-lg flex flex-col justify-center gap-4 ">
          <div className="bg-white rounded-lg p-4 w-24 h-24 mx-auto flex gap-2 items-center justify-center">
            <h1 className="text-2xl">{whole}</h1>
            <div className="text-2xl">
              {numerator}
              <div className="border-b border-black w-4 my-1"></div>
              {denominator}
            </div>
          </div>
        </div>
        <div className="bg-pink-300 rounded-lg flex flex-col gap-4 justify-center items-center ">
          <div className="flex flex-col items-center space-y-2 p-4  ">
            <input
              type="text"
              className="w-16 h-12 border-2 border-gray-300 rounded text-center text-xl"
              aria-label="Numerator"
            />
            <div className="w-16 border-b-2 border-black"></div>
            <input
              type="text"
              className="w-16 h-12 border-2 border-gray-300 rounded text-center text-xl"
              aria-label="Denominator"
            />
          </div>
        </div>

        <div className="bg-[#F4D8C5] rounded-lg  flex gap-4 flex-col justify-center items-center">
          {showHint ? (
            <div
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 border-4 cursor-pointer border-[#AD4600] scale-50 rounded-lg p-4 bg-white"
            >
              <HintSvg />
            </div>
          ) : (
            <button
              onClick={() => setShowHint(!showHint)}
              className="bg-white font-semibold mt-6 px-4 py-2 rounded shadow hover:shadow-md transition-shadow"
            >
              See hint
            </button>
          )}
        </div>
      </div>

  );
 }
export default Step1;
