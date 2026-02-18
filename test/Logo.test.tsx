import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from '../components/Logo';
import React from 'react';

describe('Logo Component', () => {
    it('renders correctly with default className', () => {
        render(<Logo />);
        const logoContainer = screen.getByLabelText('Inoglle Home');
        expect(logoContainer).toBeInTheDocument();
        expect(logoContainer).toHaveClass('h-8');

        const logoImg = screen.getByAltText('Inoglle Logo');
        expect(logoImg).toBeInTheDocument();
        expect(logoImg).toHaveAttribute('src', '/images/logo.png');
    });

    it('applies custom className', () => {
        render(<Logo className="h-12" />);
        const logoContainer = screen.getByLabelText('Inoglle Home');
        expect(logoContainer).toHaveClass('h-12');
    });
});
