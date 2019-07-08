import React from 'react';
import { withNamespaces } from 'react-i18next-phraseapp';

class Item extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.t(this.props.keyName)}</p>
      </div>
    );
  }
}

export default withNamespaces()(Item);
