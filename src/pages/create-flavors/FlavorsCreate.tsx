// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from 'react';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '@cloudscape-design/components/help-panel';
import Breadcrumbs from '../../components/breadcrumbs';
import Navigation from '../../components/navigation';
import ShellLayout from '../../layout/shell';
import { Button, ColumnLayout, ContentLayout, Input, RadioGroup, SpaceBetween, Textarea } from '@cloudscape-design/components';
import Multiselect, {MultiselectProps} from '@cloudscape-design/components/multiselect';
import Form from '@cloudscape-design/components/form';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Tiles from '@cloudscape-design/components/tiles';
import '@cloudscape-design/global-styles/index.css'
import { chocolate, fruits } from '../flavors/data';

const  options = [...fruits, ...chocolate].map(i => ({value: i, label: i}));
const isEmptyString = (value: string) => !value?.length;
export default function FlavorsCreate() {
    const [shape, setShape] = useState('bar');
    const [organic, setOrganic] =useState('yes');
    const [selectedIngredients, setSelectedIngredients] = useState<MultiselectProps['selectedOptions']>([]);
    const [wholeSalePrice, setWholeSalePrice] = useState('');
    const [retailPrice, setRetailPrice] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    

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
        <form onSubmit={event => {
            event.preventDefault();
            setIsFormSubmitted(true)
        
        }}
        >
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
        >
        <SpaceBetween size="l" >
            <Container header={<Header variant='h2'>Chocolate Shape</Header>}>
                <FormField label="shape" stretch={true}>
                    <Tiles
                    items={[
                        {
                            value: 'bar',
                            label: 'Bar',
                            description: "Traditional bar shape chocolate",

                        },
                        {
                            value: 'praline',
                            label: 'Pralines',
                            description: "Shophisticated and premium-looking chocolate shape",

                        },
                        
                    ]}
                    value={shape}
                    onChange={e=> setShape(e.detail.value)}
                    />
                </FormField>
            </Container>
     
            <Container header={<Header variant='h2'>Ingredients</Header>}>
                <SpaceBetween direction="vertical" size='l'>
                <FormField 
                    label="List of ingredients"
                    errorText={
                        isFormSubmitted && selectedIngredients.length === 0 && 'List of ingredients is required.'

                    }
                    i18nStrings={{
                        errorIconAriaLabel: 'Error',
                      }}
                
                >
                    <Multiselect
                      placeholder="Select all ingredients"
                      selectedOptions={selectedIngredients}
                      onChange={({ detail }) => setSelectedIngredients(detail.selectedOptions)}
                      options={options}
                      deselectAriaLabel={option => {
                        const label = option?.value || option?.label;
                        return label ? `Deselect ${label}` : 'no label';
                      }}
                    />
                </FormField>
                <FormField label="Organic">
                    <RadioGroup
                        value={organic}
                        onChange={({detail})=> setOrganic(detail.value)}
                        items={[
                            { value: 'no', label: 'No'},
                            { value: 'yes', label: 'Yes'},
                        ]}
                    
                    />
                </FormField>
                </SpaceBetween>
            </Container>
            <Container header={<Header variant='h2'>Marketings</Header>}>
                <FormField label="Prices" description='Define the price of wholesale and retail' stretch={true}>
                <SpaceBetween direction="vertical" size='l'>
                    <ColumnLayout columns={2}>
                        <FormField label='Wholesale Price' stretch={true} 
                            errorText={isFormSubmitted && isEmptyString(wholeSalePrice) && "Wholesale price is required"}
                            i18nStrings={{errorIconAriaLabel: 'Error'}}
                        >
                            <Input
                            value={wholeSalePrice}
                            onChange={({detail})=> setWholeSalePrice(detail.value)}
                            type='number'
                            
                            />
                        </FormField>
                        <FormField label='Retail Price' stretch={true}
                        errorText={isFormSubmitted && isEmptyString(retailPrice) && "Retail price is required"}
                        i18nStrings={{errorIconAriaLabel: 'Error'}}
                        >
                            <Input
                            value={retailPrice}
                            onChange={({detail})=> setRetailPrice(detail.value)}
                            type='number'
                            
                            />
                        </FormField>
                    </ColumnLayout>
                </SpaceBetween>
                    <FormField 
                        label={
                            <> Additional notes <i>- optional</i> </>
                        }
                        stretch={true}
                    >
                        <Textarea onChange={({detail})=> setAdditionalNotes(detail.value)} value={additionalNotes} />

                    </FormField>


                </FormField>
                
            </Container>
        </SpaceBetween>

        </Form>
        </form>
      </ContentLayout>
    </ShellLayout>
  );
}
