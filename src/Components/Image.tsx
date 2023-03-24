import * as React from "react";
import { getSinglePicture } from "../Api";
import { pictureClicksMax } from "../static/static.data";
import './Image.scss';

export type ImageProps = {
    image: IImage;
    pictureWidth: number;
}

export const ImageContext = React.createContext(0);

const Image: React.FC<ImageProps> = ({ image, pictureWidth }) => {
    const [picture, setPicture] = React.useState<IImage>(image);
    const [randomId, setRandomId] = React.useState<number | null>(null);
    const [picCounter, setPicCounter] = React.useState<number>(0);
    const [isMax, setIsMax] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const pictureHeight = pictureWidth / 4 * 3;
    const randomNumber = Math.floor(Math.random() * 1000);
    const loadingImage = 'https://cdn.pixabay.com/photo/2021/09/20/22/15/hourglass-6641967_960_720.png';

    React.useEffect(() => {
        randomId && setIsLoading(true);
        randomId && getSinglePicture(randomId).then((data) => {
            setPicture(data);
        }).then(() => {
            setIsLoading(false);
        }).catch(error => {
            setPicCounter(picCounter - 1);
            alert(`Please try again`);
            throw Error(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [randomId]);

    React.useEffect(() => {
        (picCounter === pictureClicksMax) && setIsMax(true);
    }, [picCounter]);

    const handleClick = () => {
        if (picCounter < pictureClicksMax) {
            setRandomId(randomNumber);
            setPicCounter(picCounter + 1);
        }
    }

    return (
        <ImageContext.Provider value={picCounter}>
            <div className='image' data-piccounter={picCounter}>
                {isLoading
                    ? <img className='image__object image__isLoading' src={loadingImage} width={pictureWidth} height={pictureHeight} />
                    : <img className={`image__object${isMax ? ' image__disabled' : ''}`} src={picture.download_url} width={pictureWidth} height={pictureHeight} onClick={handleClick} />
                }
            </div>
        </ImageContext.Provider>
    );
};

export default Image;
