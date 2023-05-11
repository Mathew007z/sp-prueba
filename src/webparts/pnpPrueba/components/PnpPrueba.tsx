import * as React from 'react';
import DataElementList from './DataElementsList';
import AddProductForm from './AddProductForm';


export default class PnpPrueba extends React.Component<{}> {

  public render(): React.ReactElement{

    return (
      <section>
        <DataElementList/>
        <AddProductForm/>
      </section>
    );
  }
}
