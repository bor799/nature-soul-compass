import { Destination, UserState, MbtiDimension } from '../types';
import { destinations } from '../data/destinations';

interface ScoredDestination extends Destination {
  matchScore: number;
}

export function getRecommendations(userState: UserState): Destination[] {
  const { mbtiCounts, survivalLevels } = userState;
  
  // 1. Calculate MBTI Normalized Vector (0 to 1 for each dimension)
  // Since we had 3 questions per dimension pair (e.g. 3 for I/E), total is 3.
  // We want to know the "Strength" of E vs I.
  // Let's create a profile for the user.
  const totalPerPair = 3; // 3 questions per pair in our data
  
  const userProfile = {
    E: (mbtiCounts.E || 0) / totalPerPair,
    I: (mbtiCounts.I || 0) / totalPerPair,
    N: (mbtiCounts.N || 0) / totalPerPair,
    S: (mbtiCounts.S || 0) / totalPerPair,
    T: (mbtiCounts.T || 0) / totalPerPair,
    F: (mbtiCounts.F || 0) / totalPerPair,
    J: (mbtiCounts.J || 0) / totalPerPair,
    P: (mbtiCounts.P || 0) / totalPerPair,
  };

  // 2. Filter & Score
  const scoredDestinations: ScoredDestination[] = destinations.map(dest => {
    let isDisqualified = false;
    
    // --- Hard Filters (Survival) ---
    // User Tolerance Level X means "I can handle up to X".
    // Dest Requirement Y means "You need at least tolerance Y to enjoy this".
    // Logic: If User Tolerance < Dest Requirement => Disqualified (or heavily penalized)
    
    if (survivalLevels.toilet < dest.survival_requirements.tolerance_toilet) isDisqualified = true;
    if (survivalLevels.shower < dest.survival_requirements.tolerance_shower) isDisqualified = true;
    if (survivalLevels.bugs < dest.survival_requirements.tolerance_bugs) isDisqualified = true;
    if (survivalLevels.fitness < dest.survival_requirements.physical_fitness) isDisqualified = true;

    if (isDisqualified) {
      return { ...dest, matchScore: -1 };
    }

    // --- Weighted Scoring ---
    let score = 0;

    // A. MBTI Vector Similarity (Dot Product)
    // We compare User Profile vs Dest Affinity
    // Max score per pair is 1 (since E+I=1 approx for user and dest)
    // Total max MBTI score = 4
    let mbtiScore = 0;
    mbtiScore += userProfile.E * dest.mbti_affinity.E + userProfile.I * dest.mbti_affinity.I;
    mbtiScore += userProfile.N * dest.mbti_affinity.N + userProfile.S * dest.mbti_affinity.S;
    mbtiScore += userProfile.T * dest.mbti_affinity.T + userProfile.F * dest.mbti_affinity.F;
    mbtiScore += userProfile.J * dest.mbti_affinity.J + userProfile.P * dest.mbti_affinity.P;
    
    // Normalize MBTI score (0 to 1) -> Actually it's roughly 0 to 4, so divide by 4
    const normalizedMbti = mbtiScore / 4; 
    
    score += normalizedMbti * 60; // 60% Weight

    // B. Survival "Comfort Bonus"
    // If user has higher tolerance than required, that's a plus? 
    // Or if destination is "Easy" (req=1) and user is "Hardcore" (tol=4), it's still a match but maybe less exciting?
    // Let's stick to "Comfort Match": 
    // If destination hygiene score is high, everyone likes it (generally), but we add bonus.
    score += (dest.hygiene_score / 5) * 20; // 20% Weight on pure comfort
    
    // C. Aesthetic Bonus (Instagrammability)
    score += (dest.instagrammability / 5) * 20; // 20% Weight

    return { ...dest, matchScore: score };
  });

  // Filter out disqualified (-1) and sort by score
  return scoredDestinations
    .filter(d => d.matchScore !== -1)
    .sort((a, b) => b.matchScore - a.matchScore);
}