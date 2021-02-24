import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface IChallenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: IChallenge,
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface IChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1 * 4), 2);

  const levelUp = () => setLevel(level + 1);
  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };
  const resetChallenge = () => setActiveChallenge(null);
  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
