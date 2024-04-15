import { WordleCell } from "../WordleCell/WordleCell";
import { WordleCellState } from "../WordleCell/WordleCellState";
import "./App.scss";

export const App = () => {
    const numberOfLetters = 5;
    const numberOfBoards = 2;

    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                }}
            >
                {Array()
                    .fill(numberOfBoards + numberOfLetters)
                    .map((element) => {
                        return (
                            <WordleCell
                                state={WordleCellState.Default}
                                text=""
                            />
                        );
                    })}
            </div>
        </>
    );
};
