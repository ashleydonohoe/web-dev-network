export default (forums, currentForumId) => {
  return forums.filter((forum) => {
      return forum.id === currentForumId
  });
};