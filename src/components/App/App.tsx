import "./App.scss";
import { WordleBoard } from "../WordleBoard/WordleBoard";
import { Toaster } from "react-hot-toast";

export const App = () => {
    return (
        <>
            <Toaster />
            <WordleBoard />
        </>
    );
};
