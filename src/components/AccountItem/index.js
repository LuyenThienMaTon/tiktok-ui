import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
  <div className={cx('wrapper')}>
    <img className={cx('avatar')} src='https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png' alt='' />
    <div className={cx('info')}>
        <h4 className={cx('name')}>
            <span>Nguyen Van A</span>
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
    </div>
  </div>
  );
}

export default AccountItem;
