import type { PageServerLoad } from './$types';
// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../../../tailwind.config';

export const load: PageServerLoad = () => {
	// const fullConfig = resolveConfig(tailwindConfig);

	// const spacing = fullConfig.theme?.spacing;

	const spacing = {
		TODO: '4rem'
	};

	return {
		spacing
	};
};
