import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const ForumPostItem = ({user, content, title, id, date, currentPath, isThread, isPoster, onDelete, isReply, likes, likers, onLike}) => {
    console.log(likers);
   if(isThread) {
       const replyId = isReply ? id : undefined;

       // TODO: Convert the likers list to a format that can be used
        const people = likers ? Object.keys(likers) : [];
        const hasLiked = people.includes(user.uid);

       return (
           <div className="list-item">
               <div>
                   { isPoster ? <Link to={`${currentPath}/${id}`} className="button button-edit">Edit</Link> : ""}
                   { isPoster ? <button className="button button-delete" onClick={() => onDelete(replyId, isReply)}>Delete</button> : ""}
                   <h3 className="list-item__title">{title}</h3>
                   <p className="list-item__sub-title">Posted at {moment(date).format('MMMM Do, YYYY')} by {user.name ? <Link to={`/users/${user.uid}`}> {user.name}</Link> : "Unknown"}</p>
                   <p><strong>Post Body:</strong> <br/> {content}</p>
                   { !hasLiked && !isPoster ? <p className="likes-count"><span onClick={() => onLike(replyId, isReply, likes)} className="fa fa-lg fa-heart"></span></p> : ''}
                   <p className="likes-count">{likes} likes</p>
               </div>
           </div>
       )
   } else {
       return (
           <Link className="list-item" to={`${currentPath}/${id}`}>
               <div>
                   <h3 className="list-item__title">{title}</h3>
                   <p className="list-item__sub-title">Posted at {moment(date).format('MMMM Do, YYYY')} by {user.name ? user.name : "Unknown"}</p>
               </div>
           </Link>
       )
   }
};

export default ForumPostItem;