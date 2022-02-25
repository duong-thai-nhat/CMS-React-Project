import mail from '../../img/icon/mail.svg'
import noti from '../../img/icon/noti.svg'
import avatar from '../../img/avt.jpg'
import './AccNotiEMail.css'

export const AccNotiEMail = () => {
    return (
        <div className="AccNotiEMail">
            <ul className="AccNotiEMail-list">
                <li className="AccNotiEMail-item">
                    <a href="" className="AccNotiEMail-link">
                        <img src={mail} alt="" className='AccNotiEMail-icon' />
                    </a>
                </li>
                <li className="AccNotiEMail-item">
                    <a href="" className="AccNotiEMail-link">
                        <img src={noti} alt="" className='AccNotiEMail-icon' />
                    </a>
                </li>
                <li className="AccNotiEMail-item">
                    <a href="" className="AccNotiEMail-link">
                        <div className="AccNotiEMail-avatar">
                            <img src={avatar} alt="" className='AccNotiEMail-img' />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}