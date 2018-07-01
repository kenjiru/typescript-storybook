import _ from 'lodash';
import React from 'react';

export interface SampleWidgetProps {
    name: string;
}

export class SampleWidget extends React.Component<SampleWidgetProps, {}> {
    render() {
        const { name } = this.props;
        const capitalized = _.capitalize(name);

        return <div><h1>Hello {capitalized}</h1></div>;
    }
}
