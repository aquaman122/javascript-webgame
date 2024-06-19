const number = parseInt(prompt('몇 명에서 참여 합니까?'));

if (number) {
const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');
let word;
let newWord;

function onClickBtn() {
  if (!word ||( word[word.length -1] === newWord[0] && newWord.length === 3)) {  // 제시어가 없을경우
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 === number) { // 다음사람이 마지막인 경우
      $order.textContent = 1;
    } else { // 다음사람이 마지막이 아닌경우
      $order.textContent = order + 1;
    }
  } else { // 제시한 단어가 옳바르지 않을경우
        alert('틀렸습니다.');
  }
  $input.value = '';
  $input.focus();
}

function onInput(event) {
  newWord = event.target.value;
}

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClickBtn);
}