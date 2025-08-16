import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

interface Props {
   star: number;
   readonly?: boolean;
}

const myStyles = {
   itemShapes: ThinStar,
   activeFillColor: "#ffb700",
   inactiveFillColor: "#fbf1a9",
};

const StarRating = ({ star, readonly = false }: Props) => {
   return (
      <div className="flex max-w-50 min-h-20 justify-between items-center gap-x-2">
         <h4 className="text-2xl font-bold text-yellow-300">{star}</h4>
         <Rating
            value={star}
            itemStyles={myStyles}
            className="w-full"
            readOnly={readonly}
         />
      </div>
   );
};
export default StarRating;
