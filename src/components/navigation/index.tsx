/* eslint-disable no-restricted-globals */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

const items: SideNavigationProps['items'] = [
  { type: 'link', text: 'Dashboard', href: '/Dashboard' },
  { type: 'link', text: 'Flavors', href: '/Flavors'  },
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        activeHref={location.pathname}
        header={{ href: '/', text: 'Service' }}
        items={items}
      />
    </>
  );
}
