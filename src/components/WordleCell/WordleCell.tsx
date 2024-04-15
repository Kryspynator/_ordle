import { WordleCellState } from "./WordleCellState";
import "./WordleCell.scss";

interface WordleCellProps {
    state: WordleCellState;
    cellText: string;
}

export const WordleCell = ({ state: cellState, cellText }: WordleCellProps) => {
    return <div className={"cell " + cellState}>{cellText}</div>;
};
