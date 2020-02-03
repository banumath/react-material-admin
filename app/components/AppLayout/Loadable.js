/**
 *
 * Asynchronously loads the component for AppLayout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
