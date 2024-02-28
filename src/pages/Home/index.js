import classNames from 'classnames/bind'

import styles from './Home.module.css'
import Application from './Application'

const cx = classNames.bind(styles)

export default function Home() {
    return (
        <div className={cx('wrapper')}>
            <h1>Home page</h1>
            <div className={cx('row')}>
                <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12'>
                    <Application />
                </div>
                <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12'></div>
            </div>
        </div>
    )
}