import { useState } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

interface Props {
   star: number;
   readonly?: boolean;
   onChange?: (newRating: number) => void;
}

const myStyles = {
   itemShapes: ThinStar,
   activeFillColor: "#ffb700",
   inactiveFillColor: "#fbf1a9",
};

const StarRating = ({ star, readonly = false, onChange }: Props) => {
   const [currentRating, setCurrentRating] = useState(star);

   const handleRatingChange = (newRating: number) => {
      setCurrentRating(newRating);
      if (onChange) {
         onChange(newRating);
      }

   };

   return (
      <div className="flex max-w-40 min-h-20 justify-between items-center gap-x-2">
         <h4 className="text-2xl font-bold text-yellow-300">{currentRating}</h4>
         <Rating
            value={currentRating}
            itemStyles={myStyles}
            className="w-full"
            readOnly={readonly}
            onChange={handleRatingChange}
         />
      </div>
   );
};
export default StarRating;
