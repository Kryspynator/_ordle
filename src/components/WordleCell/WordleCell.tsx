import { WordleCellState } from "./WordleCellState";
import "./WordleCell.scss";

interface WordleCellProps {
    state: WordleCellState;
    text: string;
}

export const WordleCell = ({ state, text }: WordleCellProps) => {
    return <div className={"cell " + state}>{text}</div>;
};
