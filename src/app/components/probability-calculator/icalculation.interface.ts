export interface ICalculation {
  name: string;
  description: string;
  computation(a: number, b: number): number;
}
