import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private readonly historicalCalculationsKey = 'historicalCalculations';

  logCalculation(type: string, probabilityA: number, probabilityB: number, result: number) {
    const existingStringified = localStorage.getItem(this.historicalCalculationsKey) ?? '[]';
    const historicalCalculations = JSON.parse(existingStringified);
    historicalCalculations.push({
      date: new Date(),
      type,
      probabilityA,
      probabilityB,
      result
    });

    localStorage.setItem(this.historicalCalculationsKey, JSON.stringify(historicalCalculations));
  }
}
