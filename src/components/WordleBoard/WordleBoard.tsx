import { useState } from "react";
import { WordleCell } from "../WordleCell/WordleCell";
import { WordleCellState } from "../WordleCell/WordleCellState";
import useKeypress from "react-use-keypress";
import "./WordleBoard.scss";
import toast from "react-hot-toast";

export const WordleBoard = () => {
    const numberOfLetters = 5;
    const numberOfBoards = 1;

    const [boardLetters, setBoardLetters] = useState<string[]>(
        new Array(numberOfLetters * (numberOfBoards + numberOfLetters)).fill("")
    );

    const [inputLetters, setInputLetters] = useState<string[]>(
        new Array(numberOfLetters).fill("")
    );

    useKeypress("Enter", (event: KeyboardEvent) => {
        toast.error("Word does not have enough letters!");
    });

    useKeypress("Backspace", (event: KeyboardEvent) => {
        boardLetters[boardLetters.findIndex((character) => character === "")] =
            event.key;
        setBoardLetters(new Array(...boardLetters));
    });

    useKeypress(
        "abcdefghijklmnopqrstuvwxyz".split(""),
        (event: KeyboardEvent) => {
            boardLetters[
                boardLetters.findIndex((character) => character === "")
            ] = event.key;
            setBoardLetters(new Array(...boardLetters));
        }
    );

    return (
        <>
            <div className="board">
                {boardLetters.map((character, index) => {
                    if (character === "") {
                        return (
                            <WordleCell
                                key={index}
                                state={WordleCellState.Default}
                                text={character}
                            />
                        );
                    }
                    return (
                        <WordleCell
                            key={index}
                            state={WordleCellState.Incorrect}
                            text={character}
                        />
                    );
                })}
            </div>
            <ToastContainer />
        </>
    );
};
