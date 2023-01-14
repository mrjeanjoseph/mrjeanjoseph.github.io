

const portfolioProjects = [
    {
        projectName: "Restaurant Agogo",
        ProjectDescription: "Select a random restaurant from a list based on zipcode for you to go to when you can't decide where to eat.",
        projectImageDisplay: "/src/img/img1.png",        
        TechnologyToolsUsed: "ASP.NET Core, MS/SQL hosted on Azure with Angular.",
        projectURLAddress: "https://github.com/mrjeanjoseph/RestaurantAGoGo"
    },
    {
        projectName: "ServiceDesk CRM",
        ProjectDescription: "Develop helpdesk ticketing software application for documentation of client request and resolution",
        projectImageDisplay: "/src/img/img2.png",
        TechnologyToolsUsed:"ASP.NET Core, MS/SQL with frontend Angular.",
        projectURLAddress: "https://github.com/mrjeanjoseph/ServiceDeskCRM"
    },
    {
        projectName: "TodoList App",
        ProjectDescription: "A simple todo app to showcase understanding of web development",
        projectImageDisplay: "https://cdn.lifehack.org/wp-content/uploads/2018/07/todo-list.jpeg",
        TechnologyToolsUsed:"ASP.NET Core, MS/SQL with frontend Angular.",
        projectURLAddress: "https://github.com/mrjeanjoseph/CRUD_AllDay/tree/master/js-jq-fundamentals/todolist-app"
    },
    {
        projectName: "Personal Project",
        ProjectDescription: "Project created to showcase my understanding and expertise in web development",
        projectImageDisplay: "https://github.com/mrjeanjoseph/CRUD_AllDay/blob/master/cheatsheet/img/content01.gif?raw=true",
        TechnologyToolsUsed:"HTML, CSS and JavaScript.",
        projectURLAddress: "https://github.com/mrjeanjoseph/CRUD_AllDay/tree/master/js-jq-fundamentals/professional-website"
    },
];

const introduction = {
    name: "Frednel Jean-Joseph",
    currentTitle: "Software Developer",
    currentStacks: ".NET Core/MVC/WebAPI, T-SQL & jQuery",
    image: "https://github.com/mrjeanjoseph/CRUD_AllDay/blob/master/cheatsheet/img/1-main.png?raw=true"
}

$("#myName").text(introduction.name);
$("#MyTitle").text(introduction.currentTitle);
$("#inMyToolBelt").text(introduction.currentStacks);

//Generate all the projects
$.each(portfolioProjects, function(index, item) {
    const projects = `
    <div class="item">
        <div class="card">
            <a class="" target="_blank" href="${item.projectURLAddress}"><img
                    src=" ${item.projectImageDisplay}" width="400" height="175" /></a>
            <div class="content">
                <h1><a target="_blank"></a>${item.projectName}</h1>
                <p>${item.ProjectDescription}</p>
                <p><a target="_blank" href="${item.projectURLAddress}">Click here for more details</a></p>
            </div>
        </div>
    </div>`;
    //console.log(index);
    $("#projectViews").append(projects);
});

//Footer

