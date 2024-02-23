import React from 'react'
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group'
import '@cloudscape-design/global-styles/index.css';


const items: BreadcrumbGroupProps.Item[] = [
    {text : 'Chocolate Factory ' , href: '/'},
    {text : 'Dashboard ' , href: '/'}
];

export interface BreadcrumbProps {
    active: BreadcrumbGroupProps.Item;
}

export default function breadcrumbs() {
    return <BreadcrumbGroup items={items} />;
}

