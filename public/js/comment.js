const $addCommentForm = $('#add-comment-form');
const $cmntBtn = $('#cmnt-btn');

$cmntBtn.on('click', handleClick);

function handleClick() {
    $addCommentForm.toggle();
}