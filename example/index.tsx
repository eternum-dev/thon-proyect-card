import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';
import { products } from '../src/data/products';




const product = {
  id: '1',
  title: 'coffe anda soo goood'
}

const App = () => {

  return (
    <>
      <ProductCard
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {
          () => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));