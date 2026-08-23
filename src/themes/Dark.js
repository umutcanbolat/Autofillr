export default {
  // The light theme's red at full saturation, desaturated to ~65%. Pure chroma
  // on a near-black background glares; the luminance is held so the white label
  // still clears 4.6:1 and the wordmark 3.5:1.
  primaryColor: '#D6394A',
  primaryHover: '#C22F3F',
  primaryActive: '#AE2836',
  // Far stronger than light's 22%: a tint over a near-black field lands
  // near-black too, and 32% was invisible despite a healthy contrast ratio.
  selection: 'rgb(255 90 110 / 55%)',

  background: '#202124',
  text: '#e8eaed',
  textMuted: '#9aa0a6',
  border: '#3c4043',

  surface: '#292a2d',

  field: '#1b1c1e',
  fieldHover: '#2d2f31',
};
