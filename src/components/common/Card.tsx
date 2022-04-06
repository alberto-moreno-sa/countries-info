import React from 'react';
import styles from 'styles/components/common/card.module.scss';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children = null }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
