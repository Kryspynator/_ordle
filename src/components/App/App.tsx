import { WordleCell } from "../WordleCell/WordleCell";
import { WordleCellState } from "../WordleCell/WordleCellState";
import "./App.scss";

export const App = () => {
    const numberOfLetters = 5;
    const numberOfBoards = 2;
    const cellsEmpty = new Array(
        numberOfLetters * (numberOfBoards + numberOfLetters)
    );
    const cells = cellsEmpty.map((_, index) => {
        return (
            <WordleCell
                key={index}
                state={WordleCellState.HalfCorrect}
                text="H"
            />
        );
    });
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            }}
        >
            {cells}
        </div>
    );
};
