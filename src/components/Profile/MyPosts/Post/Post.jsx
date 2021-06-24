import s from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKmw1qhgm3GljqfHKxVItnIHpv89XOQtIfQ&usqp=CAU' />
               {props.message} 
            <div>
                <span>like</span> {props.likeCounts}
                
            </div>
        </div>
    )
}

export default Post;