import style from './loading.module.css';

export default function Loading() {
    return  (
        <div style={{ display: 'flex',
                paddingTop: '50px',
               justifyContent: 'center' }}>
            <div className={style.spinner}></div>
        </div>
    )
}