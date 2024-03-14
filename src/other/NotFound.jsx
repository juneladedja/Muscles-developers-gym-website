import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceship, faMeteor } from '@fortawesome/free-solid-svg-icons';

function SpaceShipGame() {
  const [shipPosition, setShipPosition] = useState({ x: 200, y: 350 });
  const [obstacles, setObstacles] = useState([]);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shipRef = useRef(null);

  useEffect(() => {
    const createInitialObstacles = () => {
      const initialObstacles = [];
      for (let i = 0; i < 3; i++) {
        initialObstacles.push(createRandomObstacle());
      }
      setObstacles(initialObstacles);
    };

    createInitialObstacles();

    const obstacleInterval = setInterval(() => {
      const newObstacle = createRandomObstacle();
      setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
    }, 3000);

    return () => clearInterval(obstacleInterval);
  }, []);

  useEffect(() => {
    const moveObstacles = () => {
      setObstacles(prevObstacles =>
        prevObstacles.map(obstacle => ({
          ...obstacle,
          y: obstacle.y + 2 + score / 100
        }))
      );
    };

    const obstacleMovementInterval = setInterval(moveObstacles, 50);

    return () => clearInterval(obstacleMovementInterval);
  }, [score]);

  useEffect(() => {
    const handleKeyDown = event => {
      const speed = 10;
      switch (event.key) {
        case 'ArrowLeft':
          setShipPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - speed }));
          break;
        case 'ArrowRight':
          setShipPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + speed }));
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore(prevScore => prevScore + 1);
    }, 1000);

    return () => clearInterval(scoreInterval);
  }, []);

  useEffect(() => {
    if (lives === 0) {
      setGameOver(true);
    }
  }, [lives]);

  const createRandomObstacle = () => {
    return {
      id: Date.now(),
      x: Math.random() * 370,
      y: 0,
    };
  };

  const handleCollision = () => {
    setLives(prevLives => prevLives - 1);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        border: '1px solid black',
        overflow: 'hidden',
      }}
    >
      {obstacles.map(obstacle => (
        <FontAwesomeIcon
          key={obstacle.id}
          icon={faMeteor} // Cambia l'icona a seconda dell'ostacolo
          style={{
            position: 'absolute',
            left: obstacle.x + 'px',
            top: obstacle.y + 'px',
            color: 'red',
          }}
        />
      ))}
      <FontAwesomeIcon
        icon={faSpaceship} // Utilizza un'icona per l'astronave
        style={{
          position: 'absolute',
          left: shipPosition.x + 'px',
          top: shipPosition.y + 'px',
          color: 'blue',
          fontSize: '24px', // Regola la dimensione dell'astronave
        }}
      />
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        {Array.from({ length: lives }, (_, index) => (
          <span key={index} style={{ marginRight: '5px', fontSize: '20px' }}>
            ❤️
          </span>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
        Score: {score}
      </div>
      {gameOver && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '30px',
          }}
        >
          GAME OVER
        </div>
      )}
    </div>
  );
}

export default SpaceShipGame;
