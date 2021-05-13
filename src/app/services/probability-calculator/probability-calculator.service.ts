import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProbabilityCalculatorService {

  constructor() { }

  /**
   * Calculates the probability that either event will occur.
   * @param a The probability of one of the two events.
   * @param b The probability of the other event.
   */
  public combinedWith(a: number, b: number): number {
    this.validateProbability(a);
    this.validateProbability(b);
    
    return a * b;
  }

  /**
   * Calculates the probability that either event will occur.
   * @param a The probability of one of the two events.
   * @param b The probability of the other event.
   */
  public either(a: number, b: number): number {
    this.validateProbability(a);
    this.validateProbability(b);
    
    return a + b - a * b;
  }

  /**
   * Raises an error if the probability isn't valid.
   * @param probability The probability to validate
   */
  private validateProbability(probability: number): void {
    if (probability === null || probability === undefined || probability < 0 || probability > 1) {
      throw new Error(`Probabilities must be between 0 and 1.  Actual: ${probability}`);
    }
  }
}
