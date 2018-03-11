import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const ForumPostItem = ({user, content, title, id, date, currentPath, isThread, isPoster, onDelete}) => {
   if(isThread) {
       return (
           <div className="list-item">
               <div>
                   { isPoster ? <button className="button button-delete" onClick={onDelete}>Delete</button> : ""}
                   <h3 className="list-item__title">{title}</h3>
                   <p className="list-item__sub-title">Posted at {moment(date).format('MMMM Do, YYYY')} by {user.name ? user.name : "Unknown"}</p>
                   <p><strong>Post Body:</strong> <br/> {content}</p>
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