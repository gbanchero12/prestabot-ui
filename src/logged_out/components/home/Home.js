import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import BotsSection from "./BotsSection";
import LinkedinPost from "./LinkedinPost";

class Home extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }
//<LinkedinPost/>
  render() {
    return (
      <Fragment>
        <HeadSection />
        <FeatureSection />
        <BotsSection />   
      </Fragment>
    );
  }
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
