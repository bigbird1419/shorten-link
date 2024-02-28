import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.css'
import Header from '../components/Header'
import { useCallback, useState } from 'react'

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleToggleDarkMode = useCallback(() => {
        setIsDarkMode(val => !val)
    }, [])

    return (
        <div className={cx('wrapper', isDarkMode ? 'bg-colorDark' : 'bg-colorLight')}>
            <div className={cx('container')}>
                <div className='row'>
                    <div className='col-12'>
                        <Header darkMode={isDarkMode} hanldeDarkMode={handleToggleDarkMode} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}