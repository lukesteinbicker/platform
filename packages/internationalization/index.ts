import "server-only";

// Internationalization is optional - only English is supported by default
// To enable additional locales, add locale JSON files and configure LANGUINE_PROJECT_ID
export const locales = ["en"] as const;


export const getDictionary = async (_locale?: string): Promise<any> => {
  // Internationalization is optional - returns empty object by default
  // To enable i18n:
  // 1. Configure LANGUINE_PROJECT_ID environment variable
  // 2. Add locale JSON files to dictionaries/ directory
  // 3. Update this function to load and return dictionary data
  return {};
};
