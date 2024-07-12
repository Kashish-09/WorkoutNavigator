import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function ExerciseCard(props) {
  const { exercise, i } = props;
  const [setsCompleted, setSetsCompleted] = useState(0);

  function handleSetIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }

  let j = 2500;

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-indigo-950 sm:flex-wrap'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-purple-400'>
          0{i + 1}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>
          {exercise.name.replaceAll('_', ' ')}
        </h2>
        <p className='text-sm text-purple-400 capitalize'>
          {exercise.type}
        </p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-purple-400 text-sm'>Muscle Groups</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
      </div>
      <div className='flex flex-col bg-indigo-950 rounded gap-2'>
        {exercise.description.split('___').map((val) => (
          <div key={j++} className='text-sm'>
            {val}
          </div>
        ))}
      </div>
      <div className='flex w-full'>
        <div className='w-1/2 p-4'>
          {['reps', 'rest', 'tempo'].map((info) => (
            <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-indigo-800 w-full mb-2'>
              <div>
                <h3 className='capitalize text-purple-400 text-sm'>
                  {info === 'reps' ? `${exercise.unit}` : info}
                </h3>
                <p className='font-md'>{exercise[info]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='w-1/2 p-4 flex items-center justify-center'>
          <div className='w-full h-full p-2 rounded border-[1.5px] border-solid border-purple-400'>
            <ReactPlayer
              className='react-player'
              url={`https://www.youtube.com/watch?v=${exercise.link}`}
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <button
          onClick={handleSetIncrement}
          className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-pruple-900 hover:border-pruple-600 w-full'
        >
          <h3 className='text-purple-400 text-sm capitalize'>Sets Completed</h3>
          <p className='font-medium'>{setsCompleted}/5</p>
        </button>
      </div>
    </div>
  );
}
