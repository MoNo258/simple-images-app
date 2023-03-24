import * as React from "react";
import Image from "./Image";
import './ImagesGrid.scss';


export type ImagesGridProps = {
    imagesArray: IImage[];
    pictureWidth: number;
};

const ImagesGrid: React.FC<ImagesGridProps> = ({ imagesArray, pictureWidth }) => {

    return (
        <div className='image-grid'>
            {imagesArray && imagesArray.map((image) => {
                return (
                    <Image key={image.id} image={image} pictureWidth={pictureWidth} />
                )
            })}
        </div>
    );
};

export default ImagesGrid;