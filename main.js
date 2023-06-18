const numbersElements = 25;
const arrayDescription = [
  'Релаксую. А як ви проводите вихідні?', 'Нічого дивного, просто я. А що ви подумали?', 'КЩо це, якщо не кохання?',
  'Я на стилі. Як вам?', 'Як довго ми робили цей кадр? Ваші пропозиції.',
  'Що може бути краще за день, розпочатий з тренування?'
];
const arrayPictures = [
  'Vladimir Harkonnen', 'Pearl of the Ocean⁠⁠', 'Aquaman', 'Lab Scene', 'Darth Vader', 'Strike after', 'Recon Craft Mars', 'Abyssal armor', 'Caster'
  , 'Fate ruptured', 'Wake up Hayden', 'CHANI (Dune)', 'Batmobile', 'TURBULENCE', 'Gas mask glow man', 'Saint Javelin', 'Ukraine Man-machines',
  'Dungeon Train Shop', 'Friendly Robot', 'THE DARKEST ODYSSEY', 'Cyber-Poznyaki 2077', 'The silver Ninja', 'Information age', 'BLUE DREAMS', 'darkness cometh'
];
const arrayNames = [Borat, Jon, Sandra, Pit, July, Bob];
const arrayMessages = [
  'Все відмінно!', 'Загалом все непогано. Але не всі.', 'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
  'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.', 'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
  'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];
likes = {
  min: 15,
  max:200
}
IDs = {
  min: 1,
  max:999
}
Avatar = {
  min: 1,
  max:6
}

function getRandomLikes(likes) {
  return Math.floor(Math.random() * (likes.max - likes.min)) + likes.min;
}
function getRandomID(IDs) {
  return Math.floor(Math.random() * (IDs.max - IDs.min)) + IDs.min;
}
function getRandomAvatar(Avatar) {
index = Math.floor(Math.random() * (Avatar.max - Avatar.min)) + Avatar.min;
  return `img/avatar-${index}.svg`
}
function getDescription(arrayDescription) {
  let index = Math.floor(Math.random() * arrayDescription.length);
  return arrayDescription[index]
}

function getName(arrayNames) {
  let index = Math.floor(Math.random() * arrayDescription.length);
  return arrayNames[index]
}

function getMessage(arrayMessages) {
  let index = Math.floor(Math.random() * arrayMessages.length);
  return arrayMessages[index]
}
function getComment() {
  return {
    id: getRandomID(IDs),
    avatar: getRandomAvatar(Avatar),
    message: getMessage(arrayMessages),
    name: getName(arrayNames)
  }
}

const arrayPhotos = new Array(numbersElements).fill(null).map((_, i) => {
  return {
    id: i + 1,
    URL:`photos/${i+1}.jpg`,
    description: arrayPictures[i],
    likes: getRandomLikes(likes) ,
    comments: getComment()

  }
}
)
