/**
 * Get the current environment while checking if the app is running in a cloud run environment or not.
 * @returns {string} The current environment
 */
function getCurrentEnvironment() {
  const env = process.env.K_REVISION || process.env.NODE_ENV || '';

  if (env.indexOf('dev-') !== -1) {
    return 'development';
  }

  return 'production';
}

export default getCurrentEnvironment;
