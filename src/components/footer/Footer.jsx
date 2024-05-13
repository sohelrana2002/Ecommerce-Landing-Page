import Logo from '../../assets/logo.png'
import {AiOutlinePhone, AiOutlineLink} from 'react-icons/ai'
import {TfiLocationArrow} from 'react-icons/tfi'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLogin, MdPersonSearch} from 'react-icons/md'
import css from './footer.module.css'

const Footer = () => {
  return (
    <div className={css.footer_wrapper}>
        <hr />
        <div className={css.footer}>
            <div className={css.logo}>
                <img src={Logo} alt="Logo" />
                <span>amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <TfiLocationArrow className={css.icon} />
                        <span>121 north avenue Orlando, FL 32801</span>
                    </span>

                    <span className={css.pngLine}>
                        <AiOutlinePhone className={css.icon} />
                        <span>999-876-123</span>
                    </span>

                    <span className={css.pngLine}>
                        <HiOutlineMail className={css.icon} />
                        <span>amazon@info.com</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <MdOutlineLogin className={css.icon} />
                        <span>Sign In</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <MdPersonSearch className={css.icon} />
                        <span>About Us</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.details}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <AiOutlineLink className={css.icon} />
                        <span>Safty Privacy & Terms</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer