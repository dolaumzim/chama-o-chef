import { useEffect, useState } from 'react';
import { getRatings } from '../../services/Ratings/getRatings';
import { putLikeRating } from '../../services/Ratings/putLikeRating';
import {
  ContainerRating,
  Title,
  Rate,
  Comment,
  Rating,
  HasLiked
} from './styles';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import { putDislikeRating } from '../../services/Ratings/putDislikeRating';
import star from '../../assets/star.svg';

interface Like {
  id: string;
  votable_type: string;
  votable_id: string;
  voter_type: string;
  voter_id: string;
  created_at: string;
  updated_at: string;
}

interface PropsRate {
  id: string;
  user_id: string;
  dish_id: string;
  rate: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user_name: string;
  total_likes?: Like[];
  total_dislikes?: Like[];
}

export const Ratings = (values: PropsRate) => {
  const [like, setLike] = useState<number | undefined>(
    values.total_likes?.length
  );
  const [dislike, setDislike] = useState<number | undefined>(
    values.total_dislikes?.length
  );
  const [hasLiked, setHasLiked] = useState<boolean | undefined>(false);
  const [hasDisliked, setHasDisliked] = useState<boolean | undefined>(false);

  useEffect(() => {
    handleGetLike();
  }, []);

  const handleGetLike = async () => {
    const response = await getRatings(values.dish_id);
    if (
      response.data.some(respo =>
        respo.likes.some(like => like.votable_id === values.user_id)
      )
    ) {
      setHasLiked(true);
    }
  };

  const handleLike = async () => {
    const response = await putLikeRating(values.dish_id, values.id);
    if (response.status === 204) {
      if (hasLiked) {
        setLike(like => (like !== undefined ? like - 1 : like));
        setHasLiked(false);
      } else {
        setLike(like => (like !== undefined ? like + 1 : like));
        setHasLiked(true);
        if (hasDisliked) {
          setDislike(dislike =>
            dislike !== undefined ? dislike - 1 : dislike
          );
          setHasDisliked(false);
        }
      }
    }
  };

  const handleDislike = async () => {
    const response = await putDislikeRating(values.dish_id, values.id);
    if (response.status === 204) {
      if (hasDisliked) {
        setDislike(dislike => (dislike !== undefined ? dislike - 1 : dislike));
        setHasDisliked(false);
      } else {
        setDislike(dislike => (dislike !== undefined ? dislike + 1 : dislike));
        setHasDisliked(true);
        if (hasLiked) {
          setLike(like => (like !== undefined ? like - 1 : like));
          setHasLiked(false);
        }
      }
    }
  };

  return (
    <ContainerRating>
      <Rating>
        <Title>
          {values.user_name}{' '}
          <Rate>
            <img src={star} />
            {values.rate}
          </Rate>
        </Title>

        <Comment>{values.comment}</Comment>
        <HasLiked>
          <div>
            {like}{' '}
            {hasLiked ? (
              <BiSolidLike onClick={handleLike} />
            ) : (
              <BiLike onClick={handleLike} />
            )}
          </div>
          <div>
            {dislike}{' '}
            {hasDisliked ? (
              <BiSolidDislike onClick={handleDislike} />
            ) : (
              <BiDislike onClick={handleDislike} />
            )}
          </div>
        </HasLiked>
      </Rating>
    </ContainerRating>
  );
};
