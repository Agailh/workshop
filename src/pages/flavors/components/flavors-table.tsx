// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { ReactNode, useState } from 'react';
import Header  from '@cloudscape-design/components/header';
import { Flavor } from '../data';
import  Table,{ TableProps } from '@cloudscape-design/components/table';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {  CollectionPreferences, CollectionPreferencesProps} from '@cloudscape-design/components';
import Pagination from '@cloudscape-design/components/pagination';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import TextFilter from '@cloudscape-design/components/text-filter';
import { title } from 'process';

const getFilterCounterText = (count: number = 0) => `${count} ${count === 1 ? 'match' : 'matches'}`;

export interface VariationTableProps {
  flavors: Flavor[];
}



const columnDefinitions: TableProps<Flavor>['columnDefinitions'] = [
  {
    header : 'Name',
    cell : ({ name })=> name,
    sortingField: 'name',
    minWidth: 175,
  },
  {
    header: 'Sold (last month)',
    cell : ({ sold }) => sold ,
    sortingField : 'sold',
    minWidth : 160
  },
  {
    header: 'Produced (next month)',
    cell : ({ produced }) => produced ,
    sortingField:'produced',
    minWidth : 160
  },
  {
    header: 'Estimated (next month)',
    cell : ({ estimated }) => estimated ,
    sortingField: 'estimated',
    minWidth : 150
  },
  {
    header: 'Retail price (USD)',
    cell : ({ retailPrice }) => retailPrice ,
    sortingField: 'retailPrice',
    minWidth : 160
  },
  {
    header: 'Total Revenue (USD)',
    cell : ({ totalRevenue }) => totalRevenue ,
    sortingField: 'totalRevenue',
    minWidth : 160
  },
  {
    header: 'Total cost (USD)',
    cell : ({ totalCost }) => totalCost ,
    sortingField: 'totalCost',
    minWidth : 160
  },
  
]

const EmptyState = ({ title, subtitle, action}: {title: string; subtitle: string; action: ReactNode}) => {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{bottom: "s"}} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>

)}




export default function VariationTable({ flavors }: VariationTableProps) {
  const [preferences, setPreferences] = useState<CollectionPreferencesProps['preferences']>({pageSize:20});
  const {items , filterProps, actions, filteredItemsCount, paginationProps, collectionProps} = useCollection<Flavor> (flavors, {
    filtering: {
      noMatch: (
        <EmptyState
          title="No matches"
          subtitle="We can’t find a match."
          action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
        />
      ),
    },

    pagination:{ pageSize: preferences?.pageSize},
    sorting: {defaultState: {sortingColumn: columnDefinitions[0]}},
    selection: {},
  });
  return <>
  <Table <Flavor>
    {...collectionProps}
      items={items}
      columnDefinitions={columnDefinitions}
      stickyHeader={true}
      resizableColumns={true}
      variant="full-page"
      ariaLabels={{
        selectionGroupLabel: 'Items selection',
        itemSelectionLabel: ({ selectedItems }, item) => {
          const isItemSelected = selectedItems.filter(i => i.name === item.name).length;
          return `${item.name} is ${isItemSelected ? '' : 'not '}selected`;
        },
        tableLabel:'Flavors table',
      }}
      header={
        <Header variant='awsui-h1-sticky' counter={`(${flavors.length})`}>
          Flavors
        </Header>
      }
      pagination={<Pagination {...paginationProps} />}
      filter={
        <TextFilter
          {...filterProps}
          filteringPlaceholder="Find flavors"
          countText={getFilterCounterText(filteredItemsCount)}
        />
      }
      preferences={
        <CollectionPreferences 
          preferences={preferences}
          pageSizePreference={{
            title: 'select page size',
            options:[
              {value:10, label: '10 resources'},
              {value:20, label: '20 resources'},
              {value:50, label: '50 resources'},
              {value:100, label: '100 resources'}
            ],

          }}

          onConfirm={({detail}) => setPreferences(detail)}
          title='preference'
          confirmLabel='Confrim'
          cancelLabel='Cancel'
        
        />
      }
  />
  
  
  </>;
}
