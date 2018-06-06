export interface Compte {
  numero: string;
  prop: string;
  solde: number;
  operations?: any[]; // ? pour dire optionel
}
