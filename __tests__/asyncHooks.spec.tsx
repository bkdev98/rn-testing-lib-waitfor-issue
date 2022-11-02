import { renderHook, waitFor } from '@testing-library/react-native';
import React from 'react';

const useTestAsyncHook = () => {
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
    setFlag(true);
    }, 2000);
  }, []);

  return flag;
};

describe('useProductDetail', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('should instantly show initial product data', async () => {
    jest.useFakeTimers();
  
    const { result } = renderHook(() => useTestAsyncHook());
  
    await waitFor(() => !!result.current);
  
    expect(result.current).toEqual(true);
  });  
})