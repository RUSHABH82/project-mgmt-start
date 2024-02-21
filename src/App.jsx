import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined, projects: [], tasks:[],
    });


    function handleSelectProject(id) {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: id,
            };
        });
    }

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState, selectedProjectId: undefined,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, {...projectData, id: Math.random()}],
                tasks: prevState.tasks,
            }
        })
    }

    function handleDeleteProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project.id !== projectState.selectedProjectId),
                tasks: prevState.tasks.filter(task => task.projectId !== prevState.selectedProjectId)
            }
        })
    }

    function handleAddTask(text) {
        setProjectState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text,
                projectId: prevState.selectedProjectId,
                id: taskId,
            }
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    function handleDeleteTask(id) {
        setProjectState(prevState => (
            {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== id),
            })
        )
    }

    let content = <SelectedProject
        onDelete={handleDeleteProject}
        project={projectState.projects.find(({id}) => id === projectState.selectedProjectId)}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectState.tasks}/>;

    if (projectState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (<main className='h-screen my-8 flex gap-8'>
        <ProjectSidebar
            onStartAddProject={handleStartAddProject}
            projects={projectState.projects}
            onSelectProject={handleSelectProject}
            selectedProjectId={projectState.selectedProjectId}

        />
        {content}

    </main>);
}

export default App;
