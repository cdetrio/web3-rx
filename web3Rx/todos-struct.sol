contract Todos {

    struct Task {
        string title;
        bool completed;
        address owner;
        bytes32 id;
    }

    Task itemTask;

    mapping(bytes32 => Task) TaskList;

    function addTask (string _title) returns (bytes32) {
        bytes32 id = sha3(_title);
        Task new_task = TaskList[id];
        new_task.owner = msg.sender;
        new_task.title = _title;
        new_task.completed = false;
        new_task.id = id;
        return id;
    }

    function setTaskCompleted (bytes32 _id, bool _completedStatus) {
        TaskList[_id].completed = _completedStatus;
    }

    function editTaskTitle (bytes32 _id, string _newTitle) {
        TaskList[_id].title = _newTitle;
    }

    function deleteTask(bytes32 _id) {
        delete TaskList[_id];
    }

}
