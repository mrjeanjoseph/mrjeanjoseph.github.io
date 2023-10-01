

const portfolioProjects = [
    {
        projectName: "Restaurant Agogo",
        ProjectDescription: "Select a random restaurant based on zipcode and decide where to eat.",
        projectImageDisplay: "/src/img/img1.png",        
        TechnologyToolsUsed: "ASP.NET Core, MS/SQL hosted on Azure with Angular 12.",
        projectURLAddress: "https://github.com/mrjeanjoseph/RestaurantAGoGo"
    },
    {
        projectName: "ServiceDesk CRM",
        ProjectDescription: "Helpdesk ticketing software application for request and resolution.",
        projectImageDisplay: "/src/img/img2.png",
        TechnologyToolsUsed:"ASP.NET Core, MS/SQL with frontend Angular 12.",
        projectURLAddress: "https://github.com/mrjeanjoseph/ServiceDeskCRM"
    },
    {
        projectName: "Shopping List App",
        ProjectDescription: "Shopping List App to keep track of items purchased.",
        projectImageDisplay: "/src/img/img3.png",
        TechnologyToolsUsed:"JavaScript, jQuery and IndexDB.",
        projectURLAddress: "https://deepvuecrud.github.io/shoppinglist/"
    },
    {
        projectName: "Budget Tracker",
        ProjectDescription: "Budget Tracker app to monitor expenses and deposits.",
        projectImageDisplay: "/src/img/img4.png",
        TechnologyToolsUsed:"HTML, CSS and JavaScript.",
        projectURLAddress: "https://deepvuecrud.github.io/budget-tracker/"
    },
    {
        projectName: "Currently Under Planning",
        ProjectDescription: "Projects in the planning phase are still being planned and will be addressed when other projects are completed.",
        projectImageDisplay: "/src/img/planning.jpg",
        TechnologyToolsUsed:"HTML, CSS and JavaScript.",
        projectURLAddress: "/"
    },
];

const introduction = {
    fullName: "Frednel Jean-Joseph",
    currentTitle: "Software Developer",
    currentStacks: ".NET Framework/MVC/WebAPI, T-SQL & jQuery",
}

$("#myName").text(introduction.fullName);
$("#MyTitle").text(introduction.currentTitle);
$("#inMyToolBelt").text(introduction.currentStacks);

//Generate all the projects
$.each(portfolioProjects, function(index, item) {
    const projects = `
    <div class="item">
        <div class="card">
            <a class="" target="_blank" href="${item.projectURLAddress}"><img
                    src=" ${item.projectImageDisplay}" width="400" height="175" />
            </a>
            <div class="content">
                <h1><a target="_blank"></a>${item.projectName}</h1>
                <p>${item.ProjectDescription}</p>
                <p>Tool & Framework used: ${item.TechnologyToolsUsed}</p>
                <p><a target="_blank" href="${item.projectURLAddress}">Click here for more details</a></p>
            </div>
        </div>
    </div>`;
    $("#projectViews").append(projects);
});

//Footer

