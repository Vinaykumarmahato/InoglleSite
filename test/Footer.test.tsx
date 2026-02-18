import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import React from 'react';

describe('Footer Component', () => {
    it('renders brand description and logo', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByText(/strategic technology partner/i)).toBeInTheDocument();
    });

    it('renders all main footer sections', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Industries')).toBeInTheDocument();
        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('Legal')).toBeInTheDocument();
    });

    it('contains links to legal pages', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
        expect(screen.getByText('Terms of Service')).toBeInTheDocument();
        expect(screen.getByText('SLA Agreements')).toBeInTheDocument();
    });

    it('displays the correct copyright year', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });
});
