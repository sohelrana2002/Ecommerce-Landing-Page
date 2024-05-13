import ReactCompareImage from 'react-compare-image'
import Shade from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import css from './virtual.module.css'

const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.virtual_left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the wrong shade again!</span>
            <span>Try Now!</span>
            <img src={Shade} alt="Shade Image" />
        </div>
        <div className={css.virtual_right}>
            <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>
    </div>
  )
}

export default Virtual