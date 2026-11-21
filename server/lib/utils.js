const allowIsBoardAdmin = globalThis.allowIsBoardAdmin = function(userId, board) {
  return board && board.hasAdmin(userId);
};

const allowIsBoardMember = globalThis.allowIsBoardMember = function(userId, board) {
  return board && board.hasMember(userId);
};

const allowIsAnyBoardMember = globalThis.allowIsAnyBoardMember = function(userId, boards) {
  return _.some(boards, board => {
    return board && board.hasMember(userId);
  });
};

const allowIsBoardMemberCommentOnly = globalThis.allowIsBoardMemberCommentOnly = function(userId, board) {
  return board && board.hasMember(userId) && !board.hasCommentOnly(userId);
};

const allowIsBoardMemberNoComments = globalThis.allowIsBoardMemberNoComments = function(userId, board) {
  return board && board.hasMember(userId) && !board.hasNoComments(userId);
};

const allowIsBoardMemberByCard = globalThis.allowIsBoardMemberByCard = function(userId, card) {
  const board = card.board();
  return board && board.hasMember(userId);
};
