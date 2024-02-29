import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Header.module.css'
import Button from '../../../components/Button'
import { DarkModeContext } from '../../../common/DarkModeContext'

const cx = classNames.bind(styles)

const headerLink = [
    {
        title: 'Trang chủ',
        to: '/'
    },
    {
        title: 'Liên hệ',
        to: '/contact'
    }
]

export default function Header() {
    const currentPage = useLocation().pathname
    const { isDarkMode, handleToggleDarkMode } = useContext(DarkModeContext)

    return (
        <div className={cx('wrapper', isDarkMode ? 'bg-colorDark' : 'bg-colorLight', 'bg-transparent sticky top-0 z-50')}>
            <div className={cx('container')}>
                <div className={cx('', 'w-100 flex justify-between items-center py-4')}>
                    <div className={cx('logo', 'flex-none mr-6')}>
                        <Link to={'/'}
                            className={cx('text-4xl', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                        >
                            <h2 className='font-black'>🌈 shorten</h2>
                        </Link>
                    </div>
                    <div className={cx('header-control', 'flex-auto')}>
                        <div className='flex justify-between items-center'>
                            <nav
                                className={cx(isDarkMode ? 'text-colorLight' : 'text-colorDark',)}
                            >
                                {headerLink.map((el, ind) => (
                                    <Link key={ind} to={el.to}
                                        className={cx('', 'text-xl mr-4 font-semibold hover:opacity-80',

                                            currentPage === el.to ? 'text-colorSecondary' : '',
                                        )}
                                    >
                                        {el.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className={cx('control-darkMode', 'text-2xl')}>
                                <Button
                                    onClick={handleToggleDarkMode}
                                    className={cx(isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    {isDarkMode ?
                                        <i class="fa-regular fa-moon"></i> :
                                        <i className="fa-regular fa-sun"></i>
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}