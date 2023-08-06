import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import DoneIcon from '@material-ui/icons/Done';
import OnboardingItem from './OnboardingItem/OnboardingItem';
import ModalInfo from '../../../Modals/ModalInfo/ModalInfo';
import FAIcon from '../../../UI/Icon/FAIcon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './Onboarding.sass';
import { compose } from 'recompose';
import { fullName } from '../../../../services/utils';
import { withAuthController } from '../../../Providers/AuthProvider';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { OnBoardingDesign } from '../DashBoaed/OnBoardingDesign';




class Onboarding extends React.Component {
  render() {
    const { doneContacts, doneAddress, doneSenders } = this.props;
    return (
      <>
        <div className="onboarding">
          {/* <div className='onboarding__title'>Hello, {fullName(this.props.AuthController.user)}. Welcome to TargetProfilo!
          </div>
          <div className='onboarding__description'>Set up your account and get sending:</div> */}
          <Grid
            container
            spacing={32}
            style={{ marginBottom: '30px', marginTop: '30px' }}
          >
            <Grid item xs={12} md={3}>
              <OnBoardingDesign
                title="Business Info "
                text="To provide the best possible service, we need some information about your business such as your business name, location, contact details, industry, and any other relevant information."
                icon="envelope-open-text"
                componentColor="primary"
                onclickButton={() => this.props.history.push('/admin/account')}
                btnTitle="Add Business Info"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title="Integrations "
                text="Save time & effort by connecting your third-party accounts to your profile. Easily log in using your existing details and get full benefit of different platforms with out services."
                icon="map-location-dot"
                componentColor="secondary"
                onclickButton={() => this.props.history.push('/admin/apps')}
                btnTitle="Add Accounts"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title=" Target Profiles "
                text="Import your contacts and create segments to manage your target audience so that you communicate with them more effectively using differnce mediums such as emails, messages or events."
                icon="id-card"
                color="#47a8bd"
                onclickButton={() => this.props.history.push('/list-manager')}
                btnTitle="Add Contacts"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnBoardingDesign
                title=" Campaign Planning "
                text="Create impactful campaigns by meticulously planning and executing each step. Define your objectives, target audience, messaging, and channels to optimize your campaigns success."
                icon="paper-plane"
                color="#6c6b6c"
                onclickButton={() => this.props.history.push('/campaigns')}
                btnTitle="Start Planning"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title="Marketers Selections "
                text="Make use of our curated and innovative marketing tools and resources to find the best marketer to fulfill all your marketing needs, easily without any efforts or experience."
                icon="people-group"
                color="secondary"
                onclickButton={this.notAvailableModal?.open}
                btnTitle="Find Now"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title=" Active Campaign "
                text="Manage email marketing or whatsapp campaigns, automate customer journeys, and track key metrics for effective marketing strategies "
                icon="robot"
                color="#47a8bd"
                onclickButton={this.notAvailableModal?.open}
                btnTitle="Create Now"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title="Account Details "
                text="Adding account details to the app allows for a personalized experience enabling features such as saved preferences, tailored recommendations, and secure access to user-specific information"
                icon="person-chalkboard"
                componentColor="primary"
                onclickButton={() =>
                  this.props.history.push('/profile/personal')
                }
                btnTitle="View Details"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <OnboardingDesign
                title="Campaigns Requirement "
                text="Ensure campaign success by outlining the requirements and description. Clearly define objectives, target audience, messaging, and channels to optimize campaign performance."
                icon="envelopes-bulk"
                color="#47a8bd"
                onclickButton={this.notAvailableModal?.open}
                btnTitle="Define Now"
              />
            </Grid>
          </Grid>

          {/* <Grid container spacing={32}>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Business Infosss"
                text="To provide the best possible service, we need some information about your business such as your business name, location, contact details, industry, and any other relevant information."
                icon="icon-verify-email"
                buttonTitle="Add Business Info"
                onClickButton={() => this.props.history.push('/admin/account')}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Integrations"
                text="Save time & effort by connecting your third-party accounts to your profile. Easily log in using your existing details and get full benefit of different platforms with out services."
                icon="icon-add-address"
                buttonTitle="Add Accounts"
                onClickButton={() => this.props.history.push('/admin/apps')}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Target Profiles"
                text="Import your contacts and create segments to manage your target audience so that you communicate with them more effectively using differnce mediums such as emails, messages or events."
                icon="icon-add-contact"
                buttonTitle="ADD CONTACTS"
                onClickButton={() => this.props.history.push('/list-manager')}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Campaign Planning"
                text="Create impactful campaigns by meticulously planning and executing each step. Define your objectives, target audience, messaging, and channels to optimize your campaigns success."
                icon="icon-add-senders"
                buttonTitle="Start Planning"
                onClickButton={() => this.props.history.push('/campaigns')}
              />
            </Grid>
          </Grid>
          <Grid container spacing={32} className="mt-20">
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Campaigns Requirement & Description"
                text="Ensure campaign success by outlining the requirements and description. Clearly define objectives, target audience, messaging, and channels to optimize campaign performance."
                icon="icon-verify-email"
                buttonTitle="Define Now"
                onClickButton={this.notAvailableModal?.open}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Marketers Selections"
                text="Make use of our curated and innovative marketing tools and resources to find the best marketer to fulfill all your marketing needs, easily without any efforts or experience."
                icon="icon-add-contact"
                buttonTitle="Find Now"
                onClickButton={this.notAvailableModal?.open}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Active Campaign"
                text="Manage email marketing or whatsapp campaigns, automate customer journeys, and track key metrics for effective marketing strategies"
                icon="icon-add-address"
                buttonTitle="Create Now"
                onClickButton={this.notAvailableModal?.open}
              />
            </Grid>
            <Grid item sm className="onboarding__item-wrapper">
              <OnboardingItem
                title="Account Details"
                text="Adding account details to the app allows for a personalized experience, enabling features such as saved preferences, tailored recommendations, and secure access to user-specific information"
                icon="icon-add-senders"
                buttonTitle="View details"
                onClickButton={() =>
                  this.props.history.push('/profile/personal')
                }
              />
            </Grid>
          </Grid> */}
        </div>
        <ModalInfo
          modalRef={ref => (this.notAvailableModal = ref)}
          onClose={this.notAvailableModal?.close}
          title="Coming Soon"
          subtitle="Exciting new feature coming soon! Stay tuned for updates on how our latest addition will enhance your user experience and meet your needs."
        />
      </>
    );
  }
}

Onboarding = compose(withRouter, withAuthController)(Onboarding);

export default Onboarding;
