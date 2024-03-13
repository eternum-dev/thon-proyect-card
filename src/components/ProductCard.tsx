import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValue, OnChangeArgs, Product, ProductCartHandlers, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCartHandlers) => React.JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValue;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter: counter,
            increaseBy: increaseBy,
            product: product,
            maxCount: initialValues?.maxCount
        }}>
            <div className={className ? styles.productCard + ' ' + className : styles.productCard}
                style={style}
            >
                {children({
                    count: counter,
                    maxCount: initialValues?.maxCount,
                    reset,
                    increaseBy,
                    isMaxCountReached,
                    product
                })}
            </div>
        </Provider>
    )
}