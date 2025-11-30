/**
 * Get full URL for asset from Cloudflare R2 bucket
 */
export function getAssetUrl(assetPath: string): string {
  const baseUrl = "https://pub-15874316f260469095939a16da3bf7c7.r2.dev";
  
  // If path already includes delta_defence_assets, use as is
  if (assetPath.startsWith("delta_defence_assets/")) {
    return `${baseUrl}/${assetPath}`;
  }
  
  // Otherwise, add the prefix
  return `${baseUrl}/delta_defence_assets/${assetPath}`;
}

/**
 * Extract filename from asset path
 */
export function getAssetFilename(assetPath: string): string {
  return assetPath.split("/").pop() || assetPath;
}


