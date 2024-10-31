import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const config = [
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'/build',
			'/dist',
			'/.svelte-kit',
			'/package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	},
	{
		files: ['**/*.ts', '**/*.svelte'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			svelte: eslintPluginSvelte,
			prettier: eslintPluginPrettier
		},
		rules: {
			...eslintPluginSvelte.configs['flat/recommended'].rules,
			...eslintPluginPrettier.configs.recommended.rules,
			...typescriptEslintPlugin.configs.recommended.rules,
			'prettier/prettier': 'error'
		}
	},
	eslintConfigPrettier
];

export default config;
