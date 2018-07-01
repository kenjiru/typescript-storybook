import React from 'react';
import { create } from 'react-test-renderer';
import { SampleWidget } from '../widget';

test("Say my name, say my name...", () => {
    expect(true).toBe(true);
    const tree1 = create(
        <SampleWidget name="Michael" />
    ).toJSON();
    expect(tree1).toMatchSnapshot();
})