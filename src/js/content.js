const portfolioProjects = [
    {
        projectName: "Restaurant Agogo",
        ProjectDescription: "Select a random restaurant from a list based on zipcode for you to go to when you can't decide where to eat.",
        projectImageDisplay: "https://github.com/mrjeanjoseph/CRUD_AllDay/blob/master/cheatsheet/img/img1.png?raw=true",        
        TechnologyToolsUsed: "ASP.NET Core, MS/SQL hosted on Azure with Angular.",
        projectURLAddress: "https://github.com/mrjeanjoseph/RestaurantAGoGo"
    },
    {
        projectName: "ServiceDesk CRM",
        ProjectDescription: "Develop helpdesk ticketing software application for documentation of client request and resolution",
        projectImageDisplay: "https://github.com/mrjeanjoseph/CRUD_AllDay/blob/master/cheatsheet/img/img2.png?raw=true",
        TechnologyToolsUsed:"ASP.NET Core, MS/SQL with frontend Angular.",
        projectURLAddress: "https://github.com/mrjeanjoseph/ServiceDeskCRM"
    },
    {
        projectName: "TodoList App",
        ProjectDescription: "A simple todo app to showcase understanding of web development",
        projectImageDisplay: "https://res.cloudinary.com/practicaldev/image/fetch/s--pyyuGSZ9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/o96lsrld21tk232kidu4.png",
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
    currentTitle: "Software Developer at TBS-LLC",
    currentStacks: "Javascript, jQuery, Node.JS, PL/SQL",
    image: "https://github.com/mrjeanjoseph/CRUD_AllDay/blob/master/cheatsheet/img/1-main.png?raw=true"
}

// let myName = "Frednel Jean-Joseph",
//     MyTitle = "Software Developer at TBS-LLC",
//     inMyToolBelt = "Javascript, jQuery, Node.JS, PL/SQL";

$("#myName").text(introduction.name);
$("#MyTitle").text(introduction.currentTitle);
$("#inMyToolBelt").text(introduction.currentStacks);

// $("div a img").append("<img id='theImg' src='theImg.png'/>");


$.each(portfolioProjects, function(index, item) {
    //console.log(item.projectName);

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
    console.log(index);

    $("#projectViews").append(projects);
});