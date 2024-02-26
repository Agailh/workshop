// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '@cloudscape-design/components/help-panel';

import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layout/shell';
import { Button, ContentLayout, SpaceBetween } from '@cloudscape-design/components';
import Form from '@cloudscape-design/components/form';
import '@cloudscape-design/global-styles/index.css'
export default function FlavorsCreate() {
  return (
    <ShellLayout
      contentType="form"
      breadcrumbs={<Breadcrumbs active={{ text: 'Create flavor', href: '/create-flavor/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel header={<h2>Help panel</h2>} />}
    >
      <ContentLayout
        header={
          <Header
            variant="h1"
            description="Create a new flavor by specifying ingredients, quality, and price. On creation a flavor will be tested by the product and marketing team."
          >
            Create flavor
          </Header>
        }
      >
        <form onSubmit={event => event.preventDefault()}>
            <Form
            actions={
                <SpaceBetween direction ="horizontal" size='xs'>
                    <Button href='/flavors' variant='link'>
                        Cancel
                    </Button>
                    <Button formAction='submit' variant='primary'>
                        Create Flavors
                    </Button>
                </SpaceBetween>
            }
        ></Form>
        </form>
      </ContentLayout>
    </ShellLayout>
  );
}
