
/**
 * Module dependencies.
 */

import { colors } from '@segment/ui';
import element from 'virtual-element';
import Icon from '@segment/icons';

/**
 * Exports.
 */

export default { render };

/**
 * Render.
 */

function render({ props }) {
  const { isChecked, text } = props;
  const icon = getIcon(isChecked);

  return (
   <li class="CheckListItem" unchecked={!isChecked}>
     <div class="CheckListItem-icon">
       {icon}
     </div>
     <div class="CheckListItem-text">
       {text}
     </div>
   </li>
  );
}

function getIcon(isChecked) {
  if (isChecked) return  <Icon type="done" color={colors.brand.leaf} size="12px" />;
  return <Icon type="cross" color="#E3E5E8" size="12px" />;
}
