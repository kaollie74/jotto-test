

import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
   
  test( 'returns correct count when ther are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord); 
    expect(letterMatchCount).toBe(0); 
  });

  test( 'returns correct count when ther are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord); 
    expect(letterMatchCount).toBe(3); 
  })
  test( 'returns correct count when ther are duplicate matching letters', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord); 
    expect(letterMatchCount).toBe(3); 
  })
})