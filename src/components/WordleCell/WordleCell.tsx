import { WordleCellState } from "./WordleCellState";
import "./WordleCell.scss";

interface WordleCellProps {
    state: WordleCellState;
    text: string;
}

export const WordleCell = ({ state: cellState, cellText }: WordleCellProps) => {
    return <div className={"cell " + cellState}>{cellText}</div>;
};
