//# Списки и ключи
/*
- Ключи должны быть уникальными среди братьев и сестер. Однако можно использовать одни и те же ключи для узлов JSX в разных массивах.
- Ключи не должны меняться, иначе это противоречит их назначению! Не создавайте их во время рендеринга.
- Ключи не являются глобально уникальными. Они определяют только позицию в пределах родителя.
- Указание key говорит React использовать сам key как часть позиции, а не их порядок внутри родителя.
- При наличии разных ключей при переключении между одинаковыми компонентами в одной и той же позиции состояние не сохраняется.
*/

//# Методы filter и map
function List() {
  const chemists = peopleAll.filter(person => person.profession === 'chemist');
  const listItems = chemists.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

//# Ключи для Fragment
import { Fragment } from 'react';
const listItems = people.map(person => (
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
));
