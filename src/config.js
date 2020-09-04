function getEnvVar(varName) {
  if (process.env[varName]) {
    return process.env[varName];
  }
  // Set in %PUBLIC_FOLDER%/dev.properties.
  return window[varName];
}
const config = {
  backend: getEnvVar("REACT_APP_BACKEND_ENDPOINT"),

  enable_tipping: false,
  side_add_to_cart_delete_button: false,
  new_add_to_cart_button: true,

  // Sandbox: https://js.squareupsandbox.com/v2/paymentform
  // Prod: https://js.squareup.com/v2/paymentform
  square_payment_form_js: getEnvVar("REACT_APP_SQUARE_PAYMENT_FORM_JS"),
  square_app_id: getEnvVar("REACT_APP_SQUARE_APP_ID"),

  // Sandbox: https://checkout.sandbox.dev.clover.com/sdk.js
  // Production: https://checkout.clover.com/sdk.js
  clover_payment_form_js: getEnvVar("REACT_APP_CLOVER_PAYMENT_FORM_JS"),

  enable_surge_fee: getEnvVar("REACT_APP_ENABLE_SURGE_FEE") === "true",

  theme_config: {
    default: {
      style_sheet: "default.scss",
    },
  },

  // active_theme must be a key in theme_config variable.
  active_theme: process.env.REACT_APP_ACTIVE_THEME
    ? process.env.REACT_APP_ACTIVE_THEME
    : "default",

  sentryConfigDsn:
    "https://58519d804ddc40758787b782b65c27c4@o426372.ingest.sentry.io/5368157",
};

export default config;
