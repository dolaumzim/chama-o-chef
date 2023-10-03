import { useState } from 'react';
import { SignUpLocal } from '../../services/structure.ts';
import { SignUpStepAddress } from '../../components/SignUpStepAddress/index.tsx';
import { SignUpStep } from '../../components/SignUpStep/index.tsx';
import { signUpInitialValues } from './structure.ts';

export const SignUp: React.FC = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const [data, setData] = useState<SignUpLocal>(
    signUpInitialValues
  );

  const handleNextStep = (newData: SignUpLocal) => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = (newData: SignUpLocal) => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <SignUpStep next={handleNextStep} data={data} />,
    <SignUpStepAddress prev={handlePrevStep} data={data} />
  ];

  return <>{steps[currentStep]}</>;
};