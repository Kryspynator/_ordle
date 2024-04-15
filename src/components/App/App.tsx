import { WordleCell } from "../WordleCell/WordleCell";
import { WordleCellState } from "../WordleCell/WordleCellState";
import "./App.scss";

export const App = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                }}
            >
                <WordleCell state={WordleCellState.Incorrect} cellText="B" />
                <WordleCell state={WordleCellState.Incorrect} cellText="A" />
                <WordleCell state={WordleCellState.Incorrect} cellText="L" />
                <WordleCell state={WordleCellState.Incorrect} cellText="L" />
                <WordleCell state={WordleCellState.Incorrect} cellText="S" />
                <WordleCell state={WordleCellState.Incorrect} cellText="B" />
                <WordleCell state={WordleCellState.Incorrect} cellText="I" />
                <WordleCell state={WordleCellState.Incorrect} cellText="T" />
                <WordleCell state={WordleCellState.HalfCorrect} cellText="C" />
                <WordleCell state={WordleCellState.Correct} cellText="H" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
                <WordleCell state={WordleCellState.Default} cellText="" />
            </div>
        </>
    );
};
