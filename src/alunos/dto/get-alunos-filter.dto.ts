export class GetAlunosFilterDto {
  nota: number;
  criterio: Criterio;
}

export enum Criterio {
  GREATHER = '>',
  LESSER = '<',
}