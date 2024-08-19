import { Link } from 'react-router-dom';

export default function TopStoryComponent() {
    return (
        <>
            <div className="topstory">
                <h4 className='font-extrabold'>TOP PROVIRBS</h4>
                <p className='text-sm font-thin text-gray-400'>Here you can download topest Story</p>
                <Link to={'/TopProverb'}>
                    <ul>
                        <li className='text-lg cursor-pointer'><span className='text-gray-400 text-3xl  '>01.</span>Guess How Much I Love You?</li>
                        <li className='text-lg cursor-pointer'><span className='text-gray-400 text-3xl'>02.</span>The Tale of Peter Rabbit.</li>
                        <li className='text-lg cursor-pointer'><span className='text-gray-400 text-3xl'>03.</span>Alice's Adventures in Wonderland.</li>
                    </ul>
                </Link>
            </div>
        </>
    )
}
