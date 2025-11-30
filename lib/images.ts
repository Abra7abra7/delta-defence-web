/**
 * Image utilities for Cloudflare R2 bucket
 * Bucket: delta-defence-sk
 * Public URL: https://pub-fba9313f1cf044bcbdc5f91f57a0ac27.r2.dev
 */

export const R2_BASE_URL = 'https://pub-fba9313f1cf044bcbdc5f91f57a0ac27.r2.dev';

/**
 * Get full R2 URL for an asset
 */
export function getAssetUrl(assetPath: string): string {
  // Remove delta_defence_assets/ prefix if it exists
  const cleanPath = assetPath.replace('delta_defence_assets/', '');
  return `${R2_BASE_URL}/${cleanPath}`;
}

/**
 * Images by category (from data.json)
 */
export const IMAGES = {
  // Logo
  logo: 'a5e5533398a21844b6b0f3b82529ca20.png',
  
  // Homepage
  homepage: {
    hero: '7ab55b239c74a9fc18fa349359bac9da.jpg',
  },
  
  // About Us page (O nás)
  aboutUs: [
    '9d0c56fe04f6d8a89fc40e74cdd7c07a.jpg',
    '662c9ec48796d6a47f55e6df9f7e5c23.jpg',
    '68e34a4103fe65c2b3829cad01fbd823.jpg',
  ],
  
  // Production page (Výroba) - KS-4 line
  production: [
    'af467b01447b3ba8ee3cee0df1dce9a1.jpg',
    '6508c76122ecdc97d369052a66851334.jpg',
    'f6c16d852c1500e413b467bf16ce1221.jpg',
    '0a9acb869368722049949cb801aad5a6.jpg',
    '0f26d4b40a56edb00cb2ba5385ba1a11.jpg',
    '5c3ee1d3b038615644e762eb3c490165.jpg',
    'cc49e2dbe4274465e32e7eca25b5736c.jpg',
    '0396fc74d76d8c0256c97e86b3bf8404.jpg',
    '7065d48496d6bd1f700b893d92dde4d0.jpg',
    '2c8dadddb0e7998962f8f30a4b3dd6b6.jpg',
    'c75076a5b8292c4583da81cad75eac51.jpg',
    '115840473831a03c5734c059bd3c7453.jpg',
    '57788ad7037e06c01fce6732629a92ef.jpg',
    'e75128a6798579371bfe55746feec207.jpg',
  ],
  
  // Gallery page (Galéria)
  gallery: [
    '8ba0d47e2cc8d468da9bc3797c3ab0f6.jpg',
    '4cfca3407a2752916fcb253394f0c62d.png',
    'bc416865429488506162c74ab2885b3a.png',
    '5a59e8ad206ac93ce8011e7b0094e2fb.jpg',
    'b9d74ae91af95617477fbf7366423ada.jpg',
    '720df1649efef3706694771bceeeb174.jpg',
    '7cefeb5cd3a2cb3418998945e0c39680.jpg',
    '9d457f087e54e8a84465ecc28ba1b10e.jpg',
    '8d59240d27f2a8939c3f3d417e4d1657.jpg',
    'eb50f2219be45391f27ab3c3a83b84bf.jpg',
    'ede65907056a3e6f8d68ce35aac143cf.jpg',
    'ee33e2c50d41901bd8e15bb65c2d7b2c.jpg',
    'e60cacdd592ade5db8ba597e1b43499c.jpg',
    '1ba41223c7a4f6b2fe075751184a2dbf.jpg',
    'a3f19c7154673d70942ed335606f133a.jpg',
  ],
} as const;

