import classNames from "classnames/bind"
import { useContext, useRef, useState } from "react"

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
    const [isShowCopy, setIsShowCopy] = useState(false)
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleSetLongLink = (e) => {
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
                        message: 'Rút gọn link thành công!!!'
                    })
                    setIsShowMessage(true)
                    setIsLoading(false)
                } catch (error) {
                    setContentMessage({
                        type: 'error',
                        message: 'Không thể rút gọn!!!'
                    })
                    setIsShowMessage(true)
                    console.error('Error:', error);
                }
            } else {
                setContentMessage({
                    type: 'warning',
                    message: 'Vui lòng nhập đúng link!!!'
                })
                setIsShowMessage(true)
            }
        } else {
            inputRef.current.select()
            document.execCommand('copy')
            setContentMessage({
                type: 'success',
                message: 'Copy thành công!!!'
            })
            setIsShowMessage(true)
            setLongLink('')
            setIsShowCopy(val => !val)
        }
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('py-6')}>
                <h1
                    className={cx('text-4xl font-bold mb-4', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                >
                    Rút gọn liên kết
                </h1>
                <p
                    className={cx('text-md font-normal w-3/4', isDarkMode ? 'text-colorLight' : 'text-colorDark')}
                >
                    Công cụ hỗ trợ rút gọn link, thu gọn link, làm ngắn link, thống kê lượt truy cập, short link, hoàn toàn miễn phí, bạn có thể chia sẻ link trên mạng xã hội ngắn gọn nhất🍀.
                </p>
                <div className="mt-4">
                    <form className={cx('form-shorten')}>
                        <div className="relative w-4/5">
                            <input
                                ref={inputRef}
                                className={cx('input-shorten', 'w-100 pl-4 pr-8 py-2 rounded-full border focus:border-primary focus:outline-none', isDarkMode ? 'border-colorLight bg-colorDark text-colorLight' : 'border-colorDark bg-colorLight text-colorDark')}
                                type="text" placeholder="Dán liên kết cần rút gọn"
                                onChange={e => handleSetLongLink(e)} value={longLink}
                            />
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