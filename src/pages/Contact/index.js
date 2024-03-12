import { useContext } from "react"
import classNames from "classnames/bind"

import styles from './Contact.module.css'
import { DarkModeContext } from '../../common/DarkModeContext'

const cx = classNames.bind(styles)

export default function Contact() {
    const { isDarkMode } = useContext(DarkModeContext)

    return (
        <div className="wrapper">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center w-full sm:w-3/4">
                        <h1 className={cx('text-4xl font-black my-4', isDarkMode ? 'text-colorLight' : 'text-colorDark')}>Hãy kết nối với chúng tôi</h1>
                        <p className={cx('', isDarkMode ? 'text-colorLight' : 'text-colorDark')}>Bạn có đề xuất hoặc phản hồi? Chúng tôi rất sẵn sàng nghe ý kiến từ bạn! Liên hệ với chúng tôi qua các link dưới đây. Cảm ơn bạn đã giúp chúng tôi cải thiện!</p>
                    </div>
                    <div className="text-4xl mt-6 w-100">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className={cx('flex justify-center items-center', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    <a href="https://facebook.com" className="hover:opacity-80 transition-opacity duration-300 ease-in-out">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className={cx('flex justify-center items-center', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    <a className="hover:opacity-80 transition-opacity duration-300 ease-in-out" href="https://github.com">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className={cx('flex justify-center items-center', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    <a className="hover:opacity-80 transition-opacity duration-300 ease-in-out" href="https://tiktok.com">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className={cx('flex justify-center items-center', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                                >
                                    <a className="hover:opacity-80 transition-opacity duration-300 ease-in-out" href="https://youtube.com">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}