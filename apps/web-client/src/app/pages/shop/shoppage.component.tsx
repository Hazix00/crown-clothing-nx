import React from 'react';

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collectionpreview.component';
import { ProductsCollection } from '../../models/productsCollection.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {
}

interface IState {
  collections?: ProductsCollection[];
}

class ShopPage extends React.Component<IProps, IState> {

  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  override render() {
    return (
      <div>
        {this.state?.collections?.map((collection: ProductsCollection) => (
          <CollectionPreview key={collection.id} {...collection}/>
        ))}
      </div>
    );
  }

}

export default ShopPage;
