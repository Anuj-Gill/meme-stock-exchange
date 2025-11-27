export const SYMBOLS = ['MEME1', 'MEME2'] as const;

export type Symbol = typeof SYMBOLS[number];
