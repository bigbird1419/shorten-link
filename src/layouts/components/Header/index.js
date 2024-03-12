import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import { useCallback, useContext, useState } from 'react'

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
    const [isShowNavMobile, setIsShowNavMobile] = useState(false)

    const handleToggleShowNavMobile = useCallback(() => {
        setIsShowNavMobile(val => !val)
    }, [])

    return (
        <div className={cx('wrapper', isDarkMode ? 'bg-colorDark' : 'bg-colorLight', 'bg-transparent')}>
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
                                className={cx(isDarkMode ? 'text-colorLight' : 'text-colorDark', 'hidden md:block lg:block')}
                            >
                                {headerLink.map((el, ind) => (
                                    <Link key={ind} to={el.to}
                                        className={cx('', 'text-xl mr-4 font-semibold hover:opacity-80 transition-opacity duration-300 ease-in-out',

                                            currentPage === el.to ? 'text-colorSecondary' : '',
                                        )}
                                    >
                                        {el.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className={cx('control-darkMode', 'text-2xl flex')}>
                                <Button
                                    onClick={handleToggleDarkMode}
                                    className={cx(isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    {isDarkMode ?
                                        <i className="fa-regular fa-moon"></i> :
                                        <i className="fa-regular fa-sun"></i>
                                    }
                                </Button>
                                <Button
                                    onClick={handleToggleShowNavMobile}
                                    className={cx('ml-4 block sm:hidden md:hidden', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    {isShowNavMobile ?
                                        <i className="far fa-times-circle"></i> :
                                        <i className="fas fa-bars"></i>
                                    }
                                </Button>
                                {isShowNavMobile &&
                                    <nav
                                        className={cx('fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80%] h-[80%] z-50 flex flex-col justify-center items-center rounded-lg shadow-lg', isDarkMode ? 'text-colorLight' : 'text-colorDark', isDarkMode ? 'bg-colorDark' : 'bg-colorLight',)}
                                    >
                                        {headerLink.map((el, ind) => (
                                            <Link key={ind} to={el.to}
                                                className={cx('', 'text-xl my-4 font-semibold hover:opacity-80',

                                                    currentPage === el.to ? 'text-colorSecondary' : '',
                                                )}
                                                onClick={handleToggleShowNavMobile}
                                            >
                                                {el.title}
                                            </Link>
                                        ))}
                                    </nav>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}