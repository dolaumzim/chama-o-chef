import { useState } from 'react';
import { SignUpLocal } from '../../services/structure.ts';
import { SignUpStepAddress } from '../../components/SignUpStepAddress/index.tsx';
import { SignUpStep } from '../../components/SignUpStep/index.tsx';

export const SignUp: React.FC = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const [data, setData] = useState<SignUpLocal>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    telephones_attributes: [
      {
        number: null
      }
    ]
  });

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