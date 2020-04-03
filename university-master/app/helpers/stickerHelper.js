module.exports.getAction = function(sticker, action_id) {
  for(let i = 0; i < sticker.actions.length; i ++) {
    if(sticker.actions[i]._id == action_id) {
      return sticker.actions[i];
    }
  }
  return null
}
