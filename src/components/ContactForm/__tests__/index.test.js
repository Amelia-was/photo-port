import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<ContactForm />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        // value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('h1 visible', () => {
    it('has Contact Form h1', () => { 
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('contact')).toHaveTextContent('Contact Form');
    });
});

describe('submit button visible', () => {
    it('has submit button', () => { 
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('contactSubmit')).toHaveTextContent('Submit');
    });
});