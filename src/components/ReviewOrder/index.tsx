import React, { useEffect, useState } from 'react';
import { getOrderItems } from '../../services/Order/getOrderItems';
import * as Props from '../../services/structure';
import {
  Title,
  ContainerDishes,
  OrderContainer,
  Modal,
  ButtonEvaluate,
  SectionButton,
  Cancel
} from './styles';
import { ReviewDish } from '../ReviewDish';
import { useNavigate, useParams } from 'react-router-dom';
import { postEvaluateOrder } from '../../services/Order/postEvaluateOrder';
import { frontEndRoutes } from '../../routes';

export const ReviewOrder: React.FC = () => {
  const { orderId } = useParams();
  const [orderItems, setOrderItems] = useState<Props.Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Props.RatingsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const pageHome = useNavigate();

  useEffect(() => {
    const fetchOrderItems = async () => {
      if (orderId) {
        try {
          const response = await getOrderItems(orderId);
          setOrderItems(response.data);
        } catch (unknownError) {
          const error = unknownError as Error;
          setError(error.message);
        }
      }
    };

    fetchOrderItems();
  }, [orderId]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const handleReviewChange = (dishId: string, review: Props.RatingsProps) => {
    setReviews(prevReviews => {
      const otherReviews = prevReviews.filter(r => r.dish_id !== dishId);
      return [...otherReviews, review];
    });
  };

  const handleSubmit = async () => {
    if (!orderId) {
      return;
    }

    try {
      setLoading(true);
      await postEvaluateOrder(orderId, reviews);
      pageHome(frontEndRoutes.home);
    } catch (error) {
      console.error(error);
    }
  };

  const allReviewsHaveComments = () => {
    return reviews.every(review => review.comment.trim() !== '');
  };

  return (
    <OrderContainer>
      <Modal>
        <ContainerDishes>
          <Title>Avaliação</Title>
          {orderItems
            ? orderItems.map(item => (
                <ReviewDish
                  key={item.id}
                  dish={item}
                  onReviewChange={handleReviewChange}
                />
              ))
            : 'Carregando...'}
        </ContainerDishes>
        <SectionButton>
          <Cancel to={frontEndRoutes.home}>Cancelar</Cancel>
          <ButtonEvaluate
            onClick={handleSubmit}
            disabled={!allReviewsHaveComments()}
            loading={loading}
          >
            {loading ? '' : 'Avaliar'}
          </ButtonEvaluate>
        </SectionButton>
      </Modal>
    </OrderContainer>
  );
};
