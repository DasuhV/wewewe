import { useEffect, useState } from 'react'
//Icons
import {
	MoonIcon,
	SunIcon,
	SwatchIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
//Custom hooks
// import useLocalStorage from './hooks/useLocalStorage'
//styles
import styles from './ThemeSwitcher.module.css'

//component
const ThemeSwitcher = () => {
	const [hue, setHue] = useState('240')
	const [theme,setTheme] = useState('light')
	//! this is code for saving state after reloading page
	// const [hue, setHue] = useLocalStorage(
	// 	'theme-switcher-app.color',
	// 	'240'
	// )
	// const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches
	// const [theme, setTheme] = useLocalStorage(
	// 	'theme-switcher-app.theme',
	// 	defaultDark ? 'dark' : 'light'
	// )

	const [isColorPicking, setIsColorPicking] = useState(false)

	useEffect(() => {
		document.documentElement.setAttribute('color-scheme', theme as string)
	}, [theme])
	useEffect(() => {
		document.documentElement.style.setProperty('--_hue', hue as string)
	}, [hue])

	return (
		<aside className={styles.wrapper}>
			{isColorPicking ? (
				<div className={styles.colorPickingWrapper}>
					<button
						className={styles.btn}
						aria-label='Close color picking mode'
						onClick={() => setIsColorPicking(false)}
					>
						<XMarkIcon />
					</button>
					<input
						type='range'
						className={styles.picker}
						aria-label='Change color theme slider'
						min={0}
						max={360}
						value={hue as string}
						onChange={e => setHue(e.target.value)} 
					/>
				</div>
			) : (
				<div className={styles.btns}>
					<button
						className={styles.btn}
						aria-label={`Change theme to ${
							theme === 'light' ? 'dark' : 'light'
						} mode`}
						role='switch'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
					</button>
					<button
						className={styles.btn}
						aria-label='Enable color picking mode'
						onClick={() => setIsColorPicking(true)}
					>
						<SwatchIcon />
					</button>
				</div>
			)}
		</aside>
	)
}

export default ThemeSwitcher
