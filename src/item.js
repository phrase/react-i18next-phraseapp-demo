import React from 'react';
import { translate } from './react-i18next-phraseapp';

class Item extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.t('some_item')}</p>
      </div>
    );
  }
}

export default translate()(Item);
