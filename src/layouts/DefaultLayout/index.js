import classNames from 'classnames/bind'
import { useContext } from 'react'

import styles from './DefaultLayout.module.css'
import Header from '../components/Header'
import { DarkModeContext } from '../../common/DarkModeContext'

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
    const { isDarkMode, handleToggleDarkMode } = useContext(DarkModeContext)

    return (
        <div
            className={cx('wrapper', 'h-screen overflow-y-hidden', isDarkMode ? 'bg-colorDark' : 'bg-colorLight')}
        >
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