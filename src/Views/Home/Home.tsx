import React from "react";
import { getPictures } from "../../Api";
import Button from "../../Components/Button";
import Counter from "../../Components/Counter";
import { ImageContext } from "../../Components/Image";
import ImagesGrid from "../../Components/ImagesGrid";
import { picturesNumber, pictureWidth } from "../../static/static.data";
import './Home.scss';

const Home: React.FC = () => {
    const [imagesArray, setImagesArray] = React.useState<IImage[]>([]);
    const [totalCounter, setTotalCounter] = React.useState(0);

    const picCounter = React.useContext(ImageContext);

    React.useEffect(() => {
        getPictures(picturesNumber).then((data) => {
            setImagesArray(data);
        }).catch(error => {
            throw Error(error);
        });
    }, []);

    // let sum = 0;
    // const allImagesWrappers = imagesArray && document.querySelectorAll('[data-piccounter]');
    // React.useEffect(() => {
    //     allImagesWrappers && allImagesWrappers.forEach(wrapper => {
    //         const wrapperNumber = Number(wrapper.getAttribute('data-piccounter'));
    //         sum = sum + wrapperNumber;
    //     });
    // }, [imagesArray, picCounter]);

    return (
        <div className='home'>
            <Button onClick={() => setTotalCounter(0)} />
            <ImagesGrid imagesArray={imagesArray} pictureWidth={pictureWidth} />
            <Counter totalCounter={totalCounter} />
        </div>
    );
};

export default Home;