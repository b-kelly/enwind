import type { PageServerLoad } from './$types';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config';

export const load: PageServerLoad = () => {
	const fullConfig = resolveConfig(tailwindConfig);

	const spacing = fullConfig.theme?.spacing;

	return {
		spacing
	};
};
