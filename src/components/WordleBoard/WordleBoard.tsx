import { useMemo, useState } from "react";
import { WordleCell } from "../WordleCell/WordleCell";
import { WordleCellState } from "../WordleCell/WordleCellState";
import "./WordleBoard.scss";

export const WordleBoard = () => {
    const numberOfLetters = 5;
    const numberOfBoards = 1;

    const [charArray, setCharArray] = useState<string[]>(
        new Array(numberOfLetters * (numberOfBoards + numberOfLetters)).fill("")
    );

    document.addEventListener("keydown", (e) => {
        charArray[charArray.findIndex((character) => character === "")] = e.key;
        setCharArray(new Array(...charArray));
    });

    useMemo(() => {
        console.log(charArray);
    }, [charArray]);

    return (
        <div className="board">
            {charArray.map((character, index) => {
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
    );
};
