import { useGameState } from '../state-utils';
import Header from '../components/header';
import Step1 from '../components/thirdscreen/Step1';

export default function ThirdScreen() {
  const { gameStateRef } = useGameState();
  const { step, mixedFraction1, mixedFraction2 } = gameStateRef.current.state3;



  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction1}  />
      <Step1 step={step} mixedFraction={mixedFraction1} mixedFraction2={mixedFraction2} />
      
    </div>
  )
}
  
  