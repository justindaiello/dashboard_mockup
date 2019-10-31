import React from 'react';
import { StyledMain, StyledSection } from './MainStyles';
import Header from '../header/Header';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Paper from '../paper/Paper';
import ThemeSelector from '../theme_selector/ThemeSelector';

function Main() {
  return (
    <StyledMain>
      <Header />
      <Breadcrumbs />
      <StyledSection>
        {data.map(item => (
          <Paper
            heading={item.heading}
            subTop={item.subTop}
            contentTop={item.contentTop}
            subBottom={item.subBottom}
            contentBottom={item.contentBottom}
            hr={item.hr}
            key={item.heading}
            switch={item.switch}
            toolTipTop={item.toolTipTop}
            toolTipBottom={item.toolTipBottom}
            menu={item.menu}
            topMenuItems={item.topMenuItems}
            bottomMenuItems={item.bottomMenuItems}
          />
        ))}
        <ThemeSelector />
      </StyledSection>
    </StyledMain>
  );
}

export default Main;

const data = [
  {
    heading: 'Account Settings',
    subTop: 'Default Currency',
    contentTop:
      'This is the default currency that all of your valuations will be translated to.',
    subBottom: 'Accounting Methodology',
    contentBottom:
      'This is the methodology in which your tax and accounting documentation will be prepared.',
    hr: true,
    toolTipBottom: true,
    menu: true,
    topMenuItems: ['USD', 'CAD'],
    bottomMenuItems: ['FIFO', 'LIFO'],
  },
  {
    heading: 'Notification Settings',
    subTop: 'SMS Notifications',
    contentTop: 'We will push all notifications to your mobile devices.',
    subBottom: 'Email Notifications',
    contentBottom: 'Your email and phone number will not be searchable.',
    hr: true,
    switch: true,
  },
  {
    heading: 'Privacy Settings',
    subTop: 'Make Profile Private',
    contentTop:
      'Your profile with your wallet info will not be public or searchable.',
    subBottom: 'Search Privacy',
    contentBottom:
      'This is the methodology in which your tax and accounting documentation will be prepared.',
    hr: true,
    toolTipTop: true,
    toolTipBottom: true,
    switch: true,
  },
];
