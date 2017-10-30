import * as React from 'react';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import './DetailsListExample.scss';
export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
    isCompactMode: boolean;
}
export interface IDocument {
    [key: string]: any;
    name: string;
    value: string;
    iconName: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}
export declare class DetailsListDocumentsExample extends React.Component<any, IDetailsListDocumentsExampleState> {
    private _selection;
    constructor(props: any);
}