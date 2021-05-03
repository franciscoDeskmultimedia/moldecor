import Link from 'next/link';

const Cta = (props) => {
    return (
        <div className='cta-container'>
            <Link href={props.url ? props.url : '/' } >
                <a className={` text-base text-white bg-blue-500 rounded-sm px-4 py-2`}>{props.text ? props.text : 'Please inset button text'}</a>
            </Link>
        </div>
    )
}

export default Cta;