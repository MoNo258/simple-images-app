import * as React from "react";
import Image from "./Image";
import './ImagesGrid.scss';


export type ImagesGridProps = {
    numbersArray: number[];
    pictureWidth: number;
    callback: (clicksNumber: number) => void;
    resetEachPicture: boolean;
};

const ImagesGrid: React.FC<ImagesGridProps> = ({ numbersArray, pictureWidth, callback, resetEachPicture }) => {

    return (
        <div className='image-grid'>
            {numbersArray && numbersArray.map((number, i) => {
                return (
                    <Image key={`${i}${number}`} number={number} pictureWidth={pictureWidth} callback={callback} resetEachPicture={resetEachPicture} />
                )
            })}
        </div>
    );
};

export default ImagesGrid;