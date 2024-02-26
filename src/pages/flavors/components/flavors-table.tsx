// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from 'react';
import Header  from '@cloudscape-design/components/header';
import { Flavor } from '../data';
import  Table,{ TableProps } from '@cloudscape-design/components/table';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { CollectionPreferencesProps, Pagination } from '@cloudscape-design/components';

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


export default function VariationTable({ flavors }: VariationTableProps) {
  const [preferences, setPreferences] = useState<CollectionPreferencesProps['preferences']>({pageSize:20});
  const {items , filterProps, filteredItemsCount, paginationProps, collectionProps} = useCollection<Flavor> (flavors, {
    filtering:{},
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
  />
  
  
  </>;
}
