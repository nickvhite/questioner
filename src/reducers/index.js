import { combineReducers } from 'redux';

import greeting from './greeting';
import buttons from './buttons';
import flags from './flags';
import cancel from './cancel';
import politick from './politick';
import congratulations from './congratulations';
import questions from './questions';
import tablet from './tablet';
import range from './range';
import answers from './answers';

export default combineReducers({
	flags,
	greeting,
	buttons,
	cancel,
	politick,
	congratulations,
	questions,
	tablet,
	range,
	answers
})