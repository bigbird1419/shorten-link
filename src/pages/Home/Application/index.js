import classNames from "classnames/bind"
import { useContext, useEffect, useRef, useState } from "react"
import QRCode from 'qrcode.react'

import styles from './Application.module.css'
import { DarkModeContext } from '../../../common/DarkModeContext'
import Button from "../../../components/Button"
import Messages from '../../../components/Messages'
import { shortenUrl } from '../../../service/shortenService'
import Loader from '../../../components/Loader'

const cx = classNames.bind(styles)

export default function Application() {
    const inputRef = useRef()
    const { isDarkMode } = useContext(DarkModeContext)
    const [longLink, setLongLink] = useState('')
    const [isShowErrorLink, setIsShowErrorLink] = useState(false)
    const [isShowCopy, setIsShowCopy] = useState(false)
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleSetLongLink = (e) => {
        let url = e.target.value
        if (url.startsWith('http://') || url.startsWith('https://')) {
            setIsShowErrorLink(false)
        }
        else {
            setIsShowErrorLink(true)
        }
        setLongLink(e.target.value)
    }
    const handleShortenLink = async (e) => {
        e.preventDefault()
        if (!isShowCopy) {
            const URL_REGEXP = new RegExp("^(http|https|ftp)://", "i")
            let isProtocolOk = URL_REGEXP.test(longLink);
            if (isProtocolOk) {
                try {
                    setIsLoading(true)
                    const shortUrl = await shortenUrl(longLink)
                    setLongLink(shortUrl)
                    setIsShowCopy(val => !val)
                    setContentMessage({
                        type: 'success',
                        message: 'Rút gọn link thành công !!!'
                    })
                    setIsShowMessage(true)
                    setIsLoading(false)
                } catch (error) {
                    setContentMessage({
                        type: 'error',
                        message: 'Không thể rút gọn !!!'
                    })
                    setIsShowMessage(true)
                    console.error('Error:', error);
                }
            } else {
                setContentMessage({
                    type: 'warning',
                    message: 'Vui lòng nhập đúng link !!!'
                })
                setIsShowMessage(true)
            }
        } else {
            inputRef.current.select()
            document.execCommand('copy')
            setContentMessage({
                type: 'success',
                message: 'Copy thành công !!!'
            })
            setIsShowMessage(true)
            setLongLink('')
            setIsShowCopy(val => !val)
        }
    }
    const handleResetLongLink = () => {
        setLongLink('')
        setIsShowCopy(false)
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }

    useEffect(() => {
        if (isShowMessage) {
            const idTimeOut = setTimeout(() => {
                setIsShowMessage(false)
            }, 3000)

            return () => clearTimeout(idTimeOut)
        }
    }, [isShowMessage])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('py-6')}>
                <h1
                    className={cx('text-4xl font-bold mb-4', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                >
                    Rút gọn liên kết
                </h1>
                <p
                    className={cx('text-md font-normal w-100 lg:w-3/4 ', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                >
                    Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí, bạn có thể chia sẻ link trên mạng xã hội ngắn gọn nhất🍀.
                </p>
                <div className="mt-4">
                    <form className={cx('form-shorten')}>
                        <div className="relative w-100 lg:w-3/4">
                            <input
                                ref={inputRef}
                                className={cx('input-shorten', 'w-100 pl-4 pr-8 py-2 rounded-full border focus:border-primary focus:outline-none', isDarkMode ? 'border-colorLight bg-colorDark text-colorLight' : 'border-colorDark bg-colorLight text-colorDark')}
                                type="text" placeholder="Dán liên kết cần rút gọn"
                                onChange={e => handleSetLongLink(e)} value={longLink}
                            />
                            {isShowErrorLink &&
                                <span className="absolute top-100 left-0 text-colorSecondary text-sm">URL không đúng định dạng, vui lòng nhập lại.</span>
                            }
                            {/* top-100 right-0 translate-y-[-2/4] */}
                            <Button
                                className={cx('absolute top-1/2 right-0 translate-y-[-50%] mr-4', isDarkMode ? 'text-colorLight' : 'text-ccc')}
                                onClick={e => handleShortenLink(e)}
                            >
                                {isShowCopy ?
                                    <i className="far fa-copy"></i> :
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                }
                            </Button>
                        </div>
                    </form>
                    {isShowCopy &&
                        <div className="mt-4 flex items-center">
                            <div className="mr-4">
                                <QRCode value={longLink} />
                            </div>
                            <div>
                                <div className="mb-3 flex">
                                    <Button
                                        href={'https://www.facebook.com/sharer/sharer.php?u=https://hitly.vn'}
                                        className={cx('', 'px-4 py-2 mr-2 text-sm flex justify-center items-center text-colorLight bg-colorPrimary rounded-full shadow-md')}
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        href={'https://www.facebook.com/sharer/sharer.php?u=https://hitly.vn'}
                                        className={cx('', 'px-4 py-2 text-sm flex justify-center items-center text-colorLight bg-colorPrimary rounded-full shadow-md')}
                                    >
                                        Twitter
                                    </Button>
                                </div>
                                <Button
                                    onClick={handleResetLongLink}
                                    className={cx('', 'px-4 py-2 flex justify-center items-center text-colorLight bg-colorPrimary rounded-full shadow-md')}
                                >
                                    Đặt lại
                                    <i className="fa-regular fa-circle-xmark ml-2"></i>
                                </Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {isLoading && <Loader />}
            {isShowMessage && <Messages
                type={contentMessage.type}
                message={contentMessage.message}
                onClick={handleHiddenMessage}
            />}
        </div >
    )
}