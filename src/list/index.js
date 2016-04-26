
/**
 * Module dependencies.
 */

import element from 'virtual-element';

/**
 * Exports.
 */

export default { render };

/**
 * Render.
 */

function render({ props }) {
  return (
    <ul class="CheckList">
      {props.children}
    </ul>
  );
}
