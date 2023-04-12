import * as React from "react";
import { pictureClicksMax } from "../static/static.data";
import './Image.scss';

export type ImageProps = {
    number: number,
    pictureWidth: number;
    callback: (clicksNumber: number) => void;
    resetEachPicture: boolean;
}

const Image: React.FC<ImageProps> = ({ number, pictureWidth, callback, resetEachPicture }) => {
    const [picture, setPicture] = React.useState<string>('');
    const [randomId, setRandomId] = React.useState<number | null>(number);
    const [picCounter, setPicCounter] = React.useState<number>(0);
    const [isMax, setIsMax] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [increment, setIncrement] = React.useState(0);

    const pictureHeight = pictureWidth / 4 * 3;
    const randomNumber = Math.floor(Math.random() * 100);
    const imageSrc = `https://picsum.photos/id/${randomId}/300/200.jpg`;
    const loadingImage = 'https://cdn.pixabay.com/photo/2021/09/20/22/15/hourglass-6641967_960_720.png';

    React.useEffect(() => {
        setPicture(imageSrc)
    }, []);

    React.useEffect(() => {
        randomId && setIsLoading(true);
        randomId && setPicture(imageSrc);
        setIsLoading(false);
    }, [randomId]);

    React.useEffect(() => {
        if (resetEachPicture) {
            setPicCounter(0);
            setIsMax(false);
            setIncrement(0);
        }
    }, [resetEachPicture]);

    React.useEffect(() => {
        (picCounter === pictureClicksMax) && setIsMax(true);
        setIncrement(1);
        callback(increment);
    }, [picCounter]);

    const handleClick = () => {
        if (picCounter < pictureClicksMax) {
            setRandomId(randomNumber);
            setPicCounter(picCounter + 1);
        }
    }

    return (
        <div className='image'>
            {isLoading
                ? <img
                    className='image__object image__isLoading'
                    src={loadingImage}
                    width={pictureWidth}
                    height={pictureHeight} />
                : <img
                    className={`image__object${isMax ? ' image__disabled' : ''}`}
                    src={picture}
                    width={pictureWidth}
                    height={pictureHeight}
                    onClick={handleClick}
                />
            }
        </div>
    );
};

export default Image;
