import { useLocation } from 'react-router';
import { doc, addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';

const Home = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const location = useLocation();
  const currentUser = location.state;

  const handleKey = async (event) => {
    if (event.key === 'Enter') {
      try {
        await addDoc(collection(db, 'words'), {
          string: value,
          user: currentUser.user.uid,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    onSnapshot(collection(db, 'words'), (querySnapshot) => {
      const words = [];
      querySnapshot.forEach((doc) => {
        words.push(doc.data());
      });
      setList(words.filter((el) => el.user === currentUser.user.uid));
    });
  }, []);

  return (
    <>
      <div>
        <span>Enter a word</span>
        <input
          type="text"
          onKeyDown={handleKey}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {list.map((word, id) => {
          return <p key={id}>{word.string}</p>;
        })}
      </div>
    </>
  );
};

export default Home;
