import styles from './cart-icon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../../../assets/shopping-bag.svg';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface CartIconProps {}

export const CartIcon: FC = () => {
  return (
    <div className={styles['cart-icon']}>
      <ShoppingIcon className={styles['shopping-icon']} />
      <span className={styles['item-count']}>{ 0 }</span>
    </div>
  );
}

export default CartIcon;
