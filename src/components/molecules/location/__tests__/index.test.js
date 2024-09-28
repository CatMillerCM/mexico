import React from 'react';
import { render, screen } from '@testing-library/react';
import { CountryTicker } from '@/components/atoms/country-ticker';
import { Location } from '..';

jest.mock('@/app/config', () => ({ currentCountry: 'United Kingdom' }));
jest.mock('@/components/atoms/country-ticker');

describe('Location', () => {
  describe('when \'isCountriesAnimated\' flag is passed in', () => {
    beforeEach(() => {
      CountryTicker.mockReturnValue(<div />);

      render(<Location isCountriesAnimated />)
    });

    it('should render the CountryTicker component', () => {
      expect(CountryTicker).toHaveBeenCalled();
    });
  });

  describe('when \'isCountriesAnimated\' flag is NOT passed in', () => {
    beforeEach(() => {
      render(<Location />)
    });

    it('should render the current country only', () => {
      const currentCountry = screen.getByText('United Kingdom');

      expect(currentCountry).toHaveClass('currentCountry');
    });
  });
});
