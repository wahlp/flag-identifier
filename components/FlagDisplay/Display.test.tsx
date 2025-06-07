import '../test-utils/matchMedia';

import { render, screen, waitFor } from '@testing-library/react';
import { renderWithMantine } from '../test-utils/test-utils';
import { Display } from './Display';
import '@testing-library/jest-dom';

// Sample mock data to simulate /data.json
const mockData = [
  {
    code: 'US',
    name: 'United States',
    colours: ['red', 'white', 'blue'],
    design: ['stripes', 'stars']
  },
  {
    code: 'JP',
    name: 'Japan',
    colours: ['red', 'white'],
    design: ['circle']
  }
];

beforeEach(() => {
  // @ts-ignore: mocking global fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders filtered data based on selectedColors and advancedFilters', async () => {
  renderWithMantine(
    <Display
      selectedColors={['red', 'white']}
      advancedFilters={['circle']}
      strictMode={false}
      showAllData={true}
    />
  );

  await waitFor(() => {
    expect(screen.getByText('1/2 matched flags')).toBeInTheDocument();
    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.queryByText('United States')).not.toBeInTheDocument();
  });
});

test('strict mode filters out items with extra colours', async () => {
  renderWithMantine(
    <Display
      selectedColors={['red', 'white']}
      advancedFilters={[]}
      strictMode={true}
      showAllData={false}
    />
  );

  await waitFor(() => {
    expect(screen.getByText('1/2 matched flags')).toBeInTheDocument(); // Only Japan
    expect(screen.queryByText('United States')).not.toBeInTheDocument();
  });
});

test('non-strict mode includes items with extra colours', async () => {
  renderWithMantine(
    <Display
      selectedColors={['red', 'white']}
      advancedFilters={[]}
      strictMode={false}
      showAllData={false}
    />
  );

  await waitFor(() => {
    expect(screen.getByText('2/2 matched flags')).toBeInTheDocument(); // US + JP
  });
});
