import { expect } from 'chai';

import { clusterApiUrl } from '../src/util/cluster';

describe('Cluster Util', () => {
  it('invalid', () => {
    expect(() => {
      clusterApiUrl('abc123' as any);
    }).to.throw();
  });

  it('devnet', () => {
    expect(clusterApiUrl()).to.eq('https://api.devnet.solana.com');
    expect(clusterApiUrl('devnet')).to.eq('https://api.devnet.solana.com');
    expect(clusterApiUrl('devnet', true)).to.eq(
      'https://api.devnet.solana.com',
    );
    expect(clusterApiUrl('devnet', false)).to.eq(
      'http://api.devnet.solana.com',
    );
  });

  it('localhost', () => {
    expect(clusterApiUrl('localhost')).to.eq('https://localhost:8899');
    expect(clusterApiUrl('localhost', true)).to.eq('https://localhost:8899');
    expect(clusterApiUrl('localhost', false)).to.eq('http://localhost:8899');
    expect(clusterApiUrl('localhost', false, '7777')).to.eq('http://localhost:7777');
  });
});
