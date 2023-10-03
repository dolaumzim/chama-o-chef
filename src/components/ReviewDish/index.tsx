import React, { useEffect, useState } from 'react';
import * as Props from '../../services/structure';
import {
  DishContainer,
  CommentBox,
  RatingSelect,
  TitleDish,
  TitleContainer,
  TitleChef,
  SelectContainer
} from '../../components/ReviewDish/styles';
import { getDish } from '../../services/Dishes/getDish';
import star from '../../assets/star.svg';
interface ReviewDishProps {
  dish: Props.Item[][0];
}

export interface Review {
  dish_id: string;
  comment: string;
  rate: number;
}

export const ReviewDish = ({
  dish,
  onReviewChange
}: ReviewDishProps & {
  onReviewChange: (dishId: string, review: Props.RatingsProps) => void;
}) => {
  const [review, setReview] = useState<Review>({
    dish_id: dish.dish_id,
    comment: '',
    rate: 5
  });

  const [dishName, setDishName] = useState<string>('');
  const [chefName, setChefName] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReview(prevReview => ({
      ...prevReview,
      dish_id: dish.dish_id,
      rate: Number(event.target.value as string)
    }));
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setReview(prevReview => ({
      ...prevReview,
      dish_id: dish.dish_id,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchDishDetails = async () => {
      const response = await getDish(dish.dish_id);
      setDishName(response.data.name);
      setChefName(response.data.chef.name);
    };

    fetchDishDetails();
  }, [dish.dish_id]);

  useEffect(() => {
    onReviewChange(dish.dish_id, review);
  }, [review]);

  return (
    <DishContainer>
      <TitleContainer>
        <TitleDish>
          {dishName}
          <SelectContainer>
            <img src={star} />
            <RatingSelect
              name="rating"
              value={review.rate}
              onChange={handleSelectChange}
            >
              {[1, 2, 3, 4, 5].map(value => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </RatingSelect>
          </SelectContainer>
        </TitleDish>
        <TitleChef>{chefName}</TitleChef>
      </TitleContainer>

      <CommentBox
        name="comment"
        value={review.comment}
        onChange={handleTextareaChange}
        placeholder="Deixe seu comentário."
      />
    </DishContainer>
  );
};
