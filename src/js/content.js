


const portfolioProjects = [
    {
        projectName: "Restaurant Agogo",
        ProjectShortDesc: "Select a random restaurant based on zipcode and decide where to eat.",
        ProjectLongDesc: "Project description to be added here",
        projectImageDisplay: "/src/img/img1.png",        
        TechnologyToolsUsed: "ASP.NET Core, MS/SQL hosted on Azure with Angular 12.",
        projectURLAddress: "https://github.com/mrjeanjoseph/RestaurantAGoGo"
    },
    {
        projectName: "ServiceDesk CRM",
        ProjectShortDesc: "Helpdesk ticketing software application for request and resolution.",
        ProjectLongDesc: "Project description to be added here",
        projectImageDisplay: "/src/img/img2.png",
        TechnologyToolsUsed:"ASP.NET Core, MS/SQL with frontend Angular 12.",
        projectURLAddress: "https://github.com/mrjeanjoseph/ServiceDeskCRM"
    },
    {
        projectName: "Shopping List App",
        ProjectShortDesc: "Shopping List App to keep track of items purchased.",
        ProjectLongDesc: "Project description to be added here",
        projectImageDisplay: "/src/img/img3.png",
        TechnologyToolsUsed:"JavaScript, jQuery and IndexDB.",
        projectURLAddress: "https://deepvuecrud.github.io/shoppinglist/"
    },
    {
        projectName: "Budget Tracker",
        ProjectShortDesc: "Budget Tracker app to monitor expenses and deposits.",
        ProjectLongDesc: "Project description to be added here",
        projectImageDisplay: "/src/img/img4.png",
        TechnologyToolsUsed:"HTML, CSS and JavaScript.",
        projectURLAddress: "https://deepvuecrud.github.io/budget-tracker/"
    },
    {
        projectName: "In Planning Phase",
        ProjectShortDesc: "Projects in the planning phase are still being planned and will be addressed when other projects are completed.",
        ProjectLongDesc: "Project description to be added here",
        projectImageDisplay: "/src/img/planning.jpg",
        TechnologyToolsUsed:"HTML, CSS and JavaScript.",
        projectURLAddress: ""
    },
];

const introduction = {
    fullName: "Frednel Jean-Joseph",
    currentTitle: "Software Developer",
    currentStacks: ".NET Framework/MVC/WebAPI, T-SQL & jQuery",
    disabledKeyword: "Planning Phase"
}

$("#myName").text(introduction.fullName);
$("#MyTitle").text(introduction.currentTitle);
$("#inMyToolBelt").text(introduction.currentStacks);

//Generate all the projects
$.each(portfolioProjects, function(index, item) { 
    var insertEle = "target='_blank'";

    if(item.projectName.includes(introduction.disabledKeyword)){
        item.projectURLAddress = "javascript:void(0)";
        insertEle = "";
    }
    const projectLists = `
    <div class="item">
        <div class="card">
            <a class="projectImg" ${insertEle} href="${item.projectURLAddress}"><img
                    src=" ${item.projectImageDisplay}" width="400" height="175" />
            </a>
            <div class="content">
                <h1>${item.projectName}</h1>
                <p>${item.ProjectShortDesc}</p>
                <p>Tool & Framework used: ${item.TechnologyToolsUsed}</p>
                <p><a href="${item.projectURLAddress}">Click here for more details</a></p>
            </div>
        </div>
    </div>`;
    $("#displayAllProjects").append(projectLists);


});

//Footer

