import { helper } from '@ember/component/helper';

export function truncateText(params/*, hash*/) {
  let message = params[0].substring(0, params[1]);
  message += "...";
  return message;
}

export default helper(truncateText);
