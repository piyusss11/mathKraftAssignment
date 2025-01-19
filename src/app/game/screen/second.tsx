import { useGameState } from '../state-utils';
import Header from '../components/header';
import Step0 from '../components/secondscreen/Step0';

export default function SecondScreen() {
  const { gameStateRef } = useGameState();
  const { step, mixedFraction } = gameStateRef.current.state2;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
      <Step0 step={step} mixedFraction={mixedFraction} />
    </div>
  )
}
  
  