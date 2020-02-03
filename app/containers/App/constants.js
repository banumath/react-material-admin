/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const defaultNavigationConfig = {
  navWidth: 200, // number | object
  navAnchor: 'left',
  collapsedWidth: 52, // number | object
  collapsedBreakpoint: 'md', // one of ['sm', 'md', 'lg']
  autoCollapsedDisabled: false,
  heightAdjustmentDisabled: false,
  initialAdjustmentHeight: 64, // number | object
  heightAdjustmentSpeed: 144, // number(ms)
  headerPosition: 'relative', // one of ['static', 'relative', 'sticky', 'fixed', 'absolute', 'fixed'] | object
  footerShrink: true, // boolean | object
  clipped: true,
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
  collapsible: {
    xs: false,
    sm: true,
  },
};
