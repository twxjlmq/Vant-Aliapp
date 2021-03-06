// 判断子项是否被选中
function isArray(array) {
  return array instanceof Array;
}

function isActive(activeList, itemId) {
  if (typeof activeList === 'undefined' || activeList == null) return false;

  if (isArray(activeList)) {
    return activeList.indexOf(itemId) > -1;
  } else {
    return activeList === itemId;
  }
}

export var isActive = isActive;