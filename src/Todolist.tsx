import React, { useState } from "react";
import { FilterValuesType } from "./App";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: number) => void;
};

export function Todolist(props: PropsType) {
  let [filter, setFilter] = useState<FilterValuesType>("all");

  let tasksForTodolist = props.tasks;

  if (filter === "active") {
    tasksForTodolist = props.tasks.filter((t) => t.isDone === false);
  }
  if (filter === "completed") {
    tasksForTodolist = props.tasks.filter((t) => t.isDone === true);
  }
  if (filter === "displayThree") {
    tasksForTodolist = props.tasks.slice(0, 3);
  }
  if (filter === "deleteAll") {
    tasksForTodolist = [];
  }
  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasksForTodolist.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button
              onClick={() => {
                props.removeTask(t.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          changeFilter("deleteAll");
        }}
      >
        Delete all tasks
      </button>
      <div>
        <button
          onClick={() => {
            changeFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            changeFilter("completed");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            changeFilter("displayThree");
          }}
        >
          Display the first three tasks
        </button>
      </div>
    </div>
  );
}

//   let [filter, setFilter] = useState<FilterValuesType>("all");

//   let tasksForTodolist = tasks;

//   if (filter === "active") {
//     tasksForTodolist = tasks.filter((t) => t.isDone === false);
//   }
//   if (filter === "completed") {
//     tasksForTodolist = tasks.filter((t) => t.isDone === true);
//   }
//   if (filter === "displayThree") {
//     tasksForTodolist = tasks.slice(0, 3);
//   }
//   if (filter === "deleteAll") {
//     tasksForTodolist = tasks.slice(-1, 0);
//   }

//   function changeFilter(value: FilterValuesType) {
//     setFilter(value);
//   }
//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }
