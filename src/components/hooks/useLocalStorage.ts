import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue: string) => {
	const [value, setValue] = useState<string>(() => {
		try {
			const localValue = window.localStorage.getItem(key)
			return localValue ? localValue : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})

	useEffect(() => {
		window.localStorage.setItem(key, value)
	}, [key, value])

	return [value, setValue] as string & Dispatch<SetStateAction<string>>[]
}
export default useLocalStorage
