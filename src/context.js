import React, { useState, useEffect } from "react";
import data from './data';

const AppContext = React.createContext();
// console.log(data)

const AppProvider = ({ children }) => {
  const [highscore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cards, setCards] = useState({data})
  const [ids, setIds] = useState([])


  const cardClickHandler = (id) => {
    console.log(id)
    console.log(ids)
    
    if (ids.includes(id)) {
      // setHighScore(0)
      setCurrentScore(0)
      setIds([])
      
    } else {
      // setHighScore(highscore + 1);
      setCurrentScore(currentScore + 1);
      if (currentScore >= highscore) {
        setHighScore(highscore + 1)
      }
      ids.push(id)
    }

 

    //  else {
    //   const newArr = []
    //   newArr.push(id)
    //   setIds(newArr);
    //   setHighScore(highscore + 1)
    //   setCurrentScore(currentScore + 1)
    //   // console.log(ids)
    // }
    // // setIds.push(id);
    // // return ids;
    // ids.push(id)
    // return ids;
  }

  useEffect(() => {
    shuffleOrder();
  }, [currentScore])

  const randomise = (a, b) => {
    return Math.random() - 0.5;
  }

  const arrRandom = data

  const shuffleOrder = () => {
    data.sort(randomise)
    console.log(arrRandom)
    // setCards(arrRandom)
  }

  return (
    <AppContext.Provider value={{ highscore, currentScore, cards, cardClickHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
