// Country configs are loaded on demand, which keeps the comuni table shipped
// inside codice-fiscale-js (~300 kB, Italy only) out of the chunk that has to
// run before the popup paints.
//
// The display names live here rather than in the modules because the dropdown
// has to render before any config is loaded.
const configs = {
  se: { name: 'Sweden', load: () => import('./se') },
  de: { name: 'Germany', load: () => import('./de') },
  at: { name: 'Austria', load: () => import('./at') },
  nl: { name: 'Netherlands', load: () => import('./nl') },
  it: { name: 'Italy', load: () => import('./it') },
};

/**
 * Loads a country's config and generates a fresh set of form fields.
 *
 * @param {string} countryCode
 * @returns {Promise<object>} the generated fields, keyed by field name.
 */
export const generateFor = async (countryCode) => {
  const { generate } = await configs[countryCode].load();
  return generate(countryCode);
};

export default configs;
