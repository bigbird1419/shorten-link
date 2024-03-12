import classNames from 'classnames/bind'

import styles from './Home.module.css'
import Application from './Application'
import bgImg from '../../assets/shape-04.svg'
import teamImg from '../../assets/team.png'

const cx = classNames.bind(styles)

export default function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12'>
                        <Application />
                    </div>
                    <div className='col-lg-6 col-xl-6 col-md-6 col-sm-12 hidden sm:block'>
                        <div className='w-100 h-100 relative flex justify-center items-center'>
                            <img src={bgImg} alt='' className='w-100' />
                            <img src={teamImg} alt='' className='absolute w-3/4 top-0 right-0'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}