import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledCardSkeleton } from '../styles/CardSkeleton'
const CardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map(item=>(
            <StyledCardSkeleton className="card-skeleton">
            <div className="row-1">
                <Skeleton height={170} />
            </div>
            <div className="row-2">
                <Skeleton />
                <Skeleton width={250}/>
                <Skeleton width={220}/>
                <Skeleton width={200}/>
                <Skeleton width={180}/>

            </div>
        </StyledCardSkeleton>
        ))
        
    )
}

export default CardSkeleton