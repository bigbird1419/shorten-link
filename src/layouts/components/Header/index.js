import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Header.module.css'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

const headerLink = [
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Contact',
        to: '/contact'
    }
]

export default function Header({ darkMode = false, hanldeDarkMode }) {
    const currentPage = useLocation().pathname

    return (
        <div className={cx('wrapper', darkMode ? 'bg-colorDark' : 'bg-colorLight')}>
            <div className={cx('container')}>
                <div className={cx('', 'w-100 flex justify-between items-center py-4')}>
                    <div className={cx('logo', 'flex-none mr-6')}>
                        <Link to={'/'}
                            className={cx('text-4xl', darkMode ? 'text-colorLight' : 'text-colorDark')}
                        >
                            <h2>🌈 shorten</h2>
                        </Link>
                    </div>
                    <div className={cx('header-control', 'flex-auto')}>
                        <div className='flex justify-between items-center'>
                            <nav
                                className={cx(darkMode ? 'text-colorLight' : 'text-colorDark',)}
                            >
                                {headerLink.map((el, ind) => (
                                    <Link key={ind} to={el.to}
                                        className={cx('', 'text-2xl mr-4',

                                            currentPage === el.to ? 'text-colorPrimary' : '',
                                        )}
                                    >
                                        {el.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className={cx('control-darkMode', 'text-2xl')}>
                                <Button
                                    onClick={hanldeDarkMode}
                                    className={cx(darkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    {darkMode ?
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