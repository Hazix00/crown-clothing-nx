import { FC } from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import styles from './cart-drop-down.module.scss';

/* eslint-disable-next-line */
export interface CartDropDownProps {}

export const CartDropDown: FC = () => {
  return (
    <div className={styles['cart-dropdown']}>
      <div className={styles['cart-items']}>
        
      </div>
      <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropDown;
