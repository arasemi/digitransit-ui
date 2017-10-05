import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FormattedMessage } from 'react-intl';
import Icon from './Icon';
import ComponentUsageExample from './ComponentUsageExample';
import NearbyTabLabel from './NearbyTabLabel';
import FavouritesTabLabelContainer from './FavouritesTabLabelContainer';

const FrontPagePanelSmall = ({
  selectedPanel,
  nearbyClicked,
  favouritesClicked,
  panelExpanded,
  children,
}) => {
  const tabClasses = ['hover'];
  const nearbyClasses = ['nearby-routes', 'h4'];
  const favouritesClasses = ['favourites', 'h4'];

  if (selectedPanel === 1) {
    nearbyClasses.push('selected');
  } else if (selectedPanel === 2) {
    favouritesClasses.push('selected');
  }

  const content = selectedPanel && (
    <div
      className={cx(['frontpage-panel-wrapper', 'no-select'], {
        'expanded-panel': panelExpanded,
      })}
      key="panel"
    >
      {children}
    </div>
  );

  return (
    <div className={cx(['frontpage-panel-container', 'no-select'])}>
      <ul className="tabs-row cursor-pointer">
        <NearbyTabLabel
          classes={cx(tabClasses, nearbyClasses)}
          onClick={nearbyClicked}
        />
        <FavouritesTabLabelContainer
          classes={cx(tabClasses, favouritesClasses)}
          onClick={favouritesClicked}
        />
      </ul>
      {content}
    </div>
  );
};

const noop = () => {};

FrontPagePanelSmall.displayName = 'FrontPagePanelSmall';

FrontPagePanelSmall.description = () => (
  <div>
    <p>Front page tabs for small display.</p>
    <ComponentUsageExample description="Front page tabs">
      <FrontPagePanelSmall
        closePanel={noop}
        favouritesClicked={noop}
        nearbyClicked={noop}
      />
    </ComponentUsageExample>
  </div>
);

FrontPagePanelSmall.propTypes = {
  selectedPanel: PropTypes.number,
  nearbyClicked: PropTypes.func.isRequired,
  favouritesClicked: PropTypes.func.isRequired,
  panelExpanded: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default FrontPagePanelSmall;
