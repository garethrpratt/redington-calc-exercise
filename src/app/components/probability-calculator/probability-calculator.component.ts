import { Component, ViewChild } from '@angular/core';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { ProbabilityCalculatorService } from 'src/app/services/probability-calculator/probability-calculator.service';
import { ICalculation } from './icalculation.interface';

@Component({
  selector: 'app-probability-calculator',
  templateUrl: './probability-calculator.component.html',
  styleUrls: ['./probability-calculator.component.scss'],
})
export class ProbabilityCalculatorComponent {
  public probabilityA: number = 0;
  public probabilityB: number = 0;
  public result: number | null = 0;
  public selectedCalculation: ICalculation;
  @ViewChild('calculatorForm') calculatorForm!: any;

  /**
   * The list of calculations the calculator supports.
   */
  public availableCalculations: ICalculation[] = [
    {
      name: 'either',
      description: 'Either',
      computation: (a, b) => this.probabilityCalculatorService.either(a, b),
    },
    {
      name: 'combinedwith',
      description: 'Combined With',
      computation: (a, b) => this.probabilityCalculatorService.combinedWith(a, b),
    },
  ];

  constructor(
    private readonly probabilityCalculatorService: ProbabilityCalculatorService,
    private readonly loggerService: LoggerService
  ) {
    this.selectedCalculation = this.availableCalculations[0];
  }

  public parameterChange(): void {
    if (!this.calculatorForm.valid) {
      this.result = null;
      return;
    }

    this.result = this.selectedCalculation.computation(
      this.probabilityA,
      this.probabilityB
    );

    // A problem with this approach is that it logs "work in progress" calcluations.
    // For the purpose of this demo, left as is, because I like the result generation 
    // on the fly, (rather than adding a "Calculate" button).
    this.loggerService.logCalculation(
      this.selectedCalculation.name,
      this.probabilityA,
      this.probabilityB,
      this.result);
  }
}
