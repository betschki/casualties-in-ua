import { ScriptProps } from "next/script";

export interface CasualtiesInterface extends ScriptProps {
  casualties: CasualtiesReport;
}

export interface CasualtiesReport {
  total: CasualtiesDataset;
  injured: CasualtiesDataset;
  deaths: CasualtiesDataset;
}

export interface CasualtiesDataset {
  date: string;
  value: string;
  source: string;
}
