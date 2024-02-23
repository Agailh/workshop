import React from 'react'
import TopNavigation from '@cloudscape-design/components/top-navigation';
import AppLayout from '@cloudscape-design/components/app-layout';
import Navigation from './component/navigation';
import Breadcrumbs from './component/breadcrumbs';

import './App.css';
import { Container, ContentLayout, Header } from '@cloudscape-design/components';
import PrepareDashboardContent from './component/prepared-dashboard-content';

const Home = () => {
  return (
    <>
      <div id="top-nav">
      <TopNavigation
      identity={{
        href: "/",
        title: "Chocolate Factory",
        logo: {
          src: "/logo.svg",
          alt: "Chocolate Factory"
        }
      }}
      utilities={[
        {
          type: "button",
          text: "Link",
          href: "https://example.com/",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Customer Name",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
      i18nStrings={{
        overflowMenuTriggerText: 'More',
        overflowMenuTitleText: 'All',
      }}
    />
      </div>
      <AppLayout
        headerSelector="#top-nav"
        ariaLabels={{
          navigation: 'Navigation drawer',
          navigationClose: 'Close navigation drawer',
          navigationToggle: 'Open navigation drawer',
          notifications: 'Notifications',
          tools: 'Help panel',
          toolsClose: 'Close help panel',
          toolsToggle: 'Open help panel',
        }}
        breadcrumbs = {<Breadcrumbs />}
        navigation ={<Navigation/>}
        content={
          <ContentLayout header={<Header variant='h1'>Dashboard</Header>}>
              <PrepareDashboardContent />
          </ContentLayout>
        }
      />
      
    </>
  )
}

export default Home