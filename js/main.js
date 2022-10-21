'use strict'

{
  const taskValue = document.getElementsByClassName('task_value')[0];
  const taskSubmit = document.getElementsByClassName('task_submit')[0];
  const taskList = document.getElementsByClassName('task_list')[0];

  // 追加ボタンを作成
  const addTasks = (task)=> {
    // 入力したタスクを追加・表示----------------------

    // liタグを作成してlistItemに格納
    const listItem = document.createElement('li');
    // 親要素(ul)のtaskListにlistItemを追加
    const showItem = taskList.appendChild(listItem);
    // 引数として受け取ったtaskを追加
    showItem.innerHTML = task;

    // 削除ボタンを追加---------------------------------------
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    // <li>の子要素に<button>を追加
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click',e => {
      e.preventDefault();
      deleteTasks(deleteButton);
    });

  }

  


}
