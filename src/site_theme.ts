import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const site_theme: CustomThemeConfig = {
    name: 'site_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0072F5 
		"--color-primary-50": "217 234 254", // #d9eafe
		"--color-primary-100": "204 227 253", // #cce3fd
		"--color-primary-200": "191 220 253", // #bfdcfd
		"--color-primary-300": "153 199 251", // #99c7fb
		"--color-primary-400": "77 156 248", // #4d9cf8
		"--color-primary-500": "0 114 245", // #0072F5
		"--color-primary-600": "0 103 221", // #0067dd
		"--color-primary-700": "0 86 184", // #0056b8
		"--color-primary-800": "0 68 147", // #004493
		"--color-primary-900": "0 56 120", // #003878
		// secondary | #9750DD 
		"--color-secondary-50": "239 229 250", // #efe5fa
		"--color-secondary-100": "234 220 248", // #eadcf8
		"--color-secondary-200": "229 211 247", // #e5d3f7
		"--color-secondary-300": "213 185 241", // #d5b9f1
		"--color-secondary-400": "182 133 231", // #b685e7
		"--color-secondary-500": "151 80 221", // #9750DD
		"--color-secondary-600": "136 72 199", // #8848c7
		"--color-secondary-700": "113 60 166", // #713ca6
		"--color-secondary-800": "91 48 133", // #5b3085
		"--color-secondary-900": "74 39 108", // #4a276c
		// tertiary | #4B60E9 
		"--color-tertiary-50": "228 231 252", // #e4e7fc
		"--color-tertiary-100": "219 223 251", // #dbdffb
		"--color-tertiary-200": "210 215 250", // #d2d7fa
		"--color-tertiary-300": "183 191 246", // #b7bff6
		"--color-tertiary-400": "129 144 240", // #8190f0
		"--color-tertiary-500": "75 96 233", // #4B60E9
		"--color-tertiary-600": "68 86 210", // #4456d2
		"--color-tertiary-700": "56 72 175", // #3848af
		"--color-tertiary-800": "45 58 140", // #2d3a8c
		"--color-tertiary-900": "37 47 114", // #252f72
		// success | #17C964 
		"--color-success-50": "220 247 232", // #dcf7e8
		"--color-success-100": "209 244 224", // #d1f4e0
		"--color-success-200": "197 242 216", // #c5f2d8
		"--color-success-300": "162 233 193", // #a2e9c1
		"--color-success-400": "93 217 147", // #5dd993
		"--color-success-500": "23 201 100", // #17C964
		"--color-success-600": "21 181 90", // #15b55a
		"--color-success-700": "17 151 75", // #11974b
		"--color-success-800": "14 121 60", // #0e793c
		"--color-success-900": "11 98 49", // #0b6231
		// warning | #FFB800 
		"--color-warning-50": "255 244 217", // #fff4d9
		"--color-warning-100": "255 241 204", // #fff1cc
		"--color-warning-200": "255 237 191", // #ffedbf
		"--color-warning-300": "255 227 153", // #ffe399
		"--color-warning-400": "255 205 77", // #ffcd4d
		"--color-warning-500": "255 184 0", // #FFB800
		"--color-warning-600": "230 166 0", // #e6a600
		"--color-warning-700": "191 138 0", // #bf8a00
		"--color-warning-800": "153 110 0", // #996e00
		"--color-warning-900": "125 90 0", // #7d5a00
		// error | #F31260 
		"--color-error-50": "253 219 231", // #fddbe7
		"--color-error-100": "253 208 223", // #fdd0df
		"--color-error-200": "252 196 215", // #fcc4d7
		"--color-error-300": "250 160 191", // #faa0bf
		"--color-error-400": "247 89 144", // #f75990
		"--color-error-500": "243 18 96", // #F31260
		"--color-error-600": "219 16 86", // #db1056
		"--color-error-700": "182 14 72", // #b60e48
		"--color-error-800": "146 11 58", // #920b3a
		"--color-error-900": "119 9 47", // #77092f
		// surface | #343434 
		"--color-surface-50": "225 225 225", // #e1e1e1
		"--color-surface-100": "214 214 214", // #d6d6d6
		"--color-surface-200": "204 204 204", // #cccccc
		"--color-surface-300": "174 174 174", // #aeaeae
		"--color-surface-400": "113 113 113", // #717171
		"--color-surface-500": "52 52 52", // #343434
		"--color-surface-600": "47 47 47", // #2f2f2f
		"--color-surface-700": "39 39 39", // #272727
		"--color-surface-800": "31 31 31", // #1f1f1f
		"--color-surface-900": "25 25 25", // #191919
	}
}