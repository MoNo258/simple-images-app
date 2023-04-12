import React from "react";
import Button from "../../Components/Button";
import Counter from "../../Components/Counter";
import ImagesGrid from "../../Components/ImagesGrid";
import { picturesNumber, pictureWidth } from "../../static/static.data";
import './Home.scss';

const Home: React.FC = () => {
    const [numbersArray, setNumbersArray] = React.useState<number[]>([]);
    const [totalCounter, setTotalCounter] = React.useState(0);
    const [resetEachPicture, setResetEachPicture] = React.useState(false);

    React.useEffect(() => {
        setNumbersArray(Array.from({ length: picturesNumber }, () => Math.floor(Math.random() * 100)));
    }, []);

    const sum = (value: number) => {
        setResetEachPicture(false);
        setTotalCounter(totalCounter + value);
    }

    const handleReset = () => {
        setTotalCounter(0);
        setResetEachPicture(true);
    }

    return (
        <div className='home'>
            <Button onClick={handleReset} />
            <ImagesGrid numbersArray={numbersArray} pictureWidth={pictureWidth} callback={sum} resetEachPicture={resetEachPicture} />
            <Counter totalCounter={totalCounter} />
        </div>
    );
};

export default Home;