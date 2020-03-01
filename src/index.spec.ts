import { Plugins } from './index';

test('sample test', () => {
	const plugins = new Plugins();

	class Factory { }
	class Impl { }

	plugins.for(Factory).return(Impl);

	const fac = plugins.resolve(Factory);

	expect(fac.constructor).toBe(Impl);
})