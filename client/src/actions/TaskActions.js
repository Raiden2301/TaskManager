export const getTasksByProject = (type = 'GET_TASKS_BY_PROJECT', id) => ({
    type: type,
    id: id
})

export const deleteTaskById = (type = 'DELETE_TASK_BY_ID', taskId, projectId) => ({
    type: type,
    taskId: taskId,
    projectId: projectId
})