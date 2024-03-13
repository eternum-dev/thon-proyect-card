import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('Pruebas en el componente <ProductImage />', () => {

    test('Debe de motrar el imagen', () => {

        const wrapper = renderer.create(
            <ProductImage img='https://t4.ftcdn.net/jpg/04/30/55/11/360_F_430551145_pE3FZqhabVLPU3QJ1UHb7L2R5zGowYdc.jpg' />
        )
        expect(wrapper.toJSON).toMatchSnapshot();
    });

    test('Debe de motrarel componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>

        )
        expect(wrapper.toJSON).toMatchSnapshot();
    });
});