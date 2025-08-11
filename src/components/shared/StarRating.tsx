import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

interface Props {
   star: number;
}

const myStyles = {
   itemShapes: ThinStar,
   activeFillColor: "#ffb700",
   inactiveFillColor: "#fbf1a9",
};

const StarRating = ({ star }: Props) => {
   return (
      <Rating
         value={star}
         itemStyles={myStyles}
         readOnly
      />
   );
};
export default StarRating;
