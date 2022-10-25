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
    // 引数として受け取ったtaskを<li>に追加
    showItem.innerHTML = task;

    // 削除ボタンを追加---------------------------------------
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '削除';
    // <li>の子要素に<button>を追加
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click',e => {
      e.preventDefault();
      const confirmation = confirm("削除してよろしいですか？");
      if (confirmation === true){
        deleteTasks(deleteButton);
      }
    });

  };

    // 削除機能
    const deleteTasks = (deleteButton) => {
      // 直近のliタグを取得＝削除ボタンに対応するリストを取得
      const chosenTask = deleteButton.closest('li');
      // 親要素のulから対応するli要素を削除
      taskList.removeChild(chosenTask);
    }

    // 追加ボタンを押した時の動作
    taskSubmit.addEventListener('click', e => {
      e.preventDefault();
      // 入力フォームから受け取った文字(タスク)を格納
      const task = taskValue.value;
      addTasks(task);
      // 入力フォームの文字をからにする
      taskValue.value = '';
    });
    
    




  


}
