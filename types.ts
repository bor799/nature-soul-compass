export type MbtiDimension = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';

export interface Option {
  id?: string; // Optional because survival options might just have level
  text: string;
  value: any; // 'E', 'I', or level number
  description?: string; // For survival questions
}

export interface Question {
  id: string | number;
  type: 'mbti' | 'survival';
  category: string; // 'I_E', 'toilet', etc.
  text: string; // The question text
  description?: string; // Context for survival questions
  options: Option[];
  dimension?: MbtiDimension; // Only for MBTI
}

export interface MbtiAffinity {
  I: number; E: number;
  N: number; S: number;
  T: number; F: number;
  J: number; P: number;
}

export interface SurvivalRequirements {
  tolerance_toilet: number;
  tolerance_shower: number;
  tolerance_bugs: number;
  physical_fitness: number;
}

export interface DestinationRecommendation {
  score: number;
  reason: string;
  best_for: string[];
  experience: string;
  tips: string[];
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  tags: string[];
  image: string;
  
  // Attributes
  hygiene_score: number;
  fitness_req?: number; // Mapped from survival_requirements.physical_fitness
  instagrammability: number;
  social_pressure: number;
  maturation: number;

  highlights: string[];
  best_season: string[];
  
  // Matching Data
  mbti_affinity: MbtiAffinity;
  survival_requirements: SurvivalRequirements;
  recommendation_data: DestinationRecommendation; // Renamed from 'recommendation' in JSON to avoid conflict with calculated result
}

export interface UserState {
  answers: Record<string, any>; // questionId -> value
  currentStep: number;
  isFinished: boolean;
  mbtiCounts: Record<MbtiDimension, number>;
  survivalLevels: {
    toilet: number;
    shower: number;
    bugs: number;
    fitness: number;
  };
}