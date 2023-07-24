
function openProjectLink(project) {
    console.log('clicked')
    window.open(project.link)
}

window.onload = function () {
    var projects = {
        kernel : {
            title : 'X-Corp Kernel',
            content: 'This project was started in 2023 June as a research project for a Bachelors degree in Information technology in at Kampla international University Western campus in Uganda',
            progress: 60,
            link: 'https://github.com/Edcorp844/xcorp_kernel'
        },
        App : {
            title: 'Connect',
            content: 'This is a social app that was developed to help the campus student in Ishaka to connect more and find buyers for their products. It also facilitated nes posting and commenting.',
            progress: 90
        },
        Game : {
            title: 'Radius Raid',
            content: 'This game was developed under the MIT research on Game Mathemetics.',
            progress: 100,
            link: 'https://github.com/Edcorp844/RadiusRaid'
        }

    }
    
    var ProjectTitle = document.querySelector('.projectTitle')
    var ProjectContent = document.querySelector('.procontent')
    var ProgressNumber = document.querySelector('.pronum')
    var ProgressBar = document.querySelector('.progress')
    
    var ProjectkernelBtn = document.querySelector("#prokernelbtn");
    ProjectkernelBtn.addEventListener('click', function(){
        var project = projects.kernel
        ProjectTitle.innerHTML = '<h2>'+project.title +'</h2>' 
        ProjectContent.innerHTML = '<p>'+project.content+'</p>'
        ProgressNumber.innerHTML = project.progress+"%"
        ProgressBar.style.width = project.progress+'%'

        var projectLinkBtn = document.getElementById('proLinkBtn')    

        projectLinkBtn.addEventListener('click', openProjectLink(projects.kernel))
    })
    
    var ProjectAppBtn = document.querySelector("#proAppbtn");
    ProjectAppBtn.addEventListener('click', function() {
        ProjectTitle.innerHTML = '<h2>'+projects.App.title +'</h2>' 
        ProjectContent.innerHTML = '<p>'+projects.App.content+'</p>'
        ProgressNumber.innerHTML = projects.App.progress+"%"
        ProgressBar.style.width = projects.App.progress+'%'
    })

    var ProjectGameBtn = document.querySelector("#proGamebtn");
    ProjectGameBtn.addEventListener('click', function(){
        ProjectTitle.innerHTML = '<h2>'+projects.Game.title +'</h2>' 
        ProjectContent.innerHTML = '<p>'+projects.Game.content+'</p>'
        ProgressNumber.innerHTML = projects.Game.progress+"%"
        ProgressBar.style.width = projects.Game.progress+'%'
    })

    function renderFavicon() {
        var favicon = document.getElementById( 'favicon' ),
            favc = document.createElement( 'canvas' ),
            favctx = favc.getContext( '2d' ),
            faviconGrid = [
                [ 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
                [ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
                [ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
                [ 1,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1,  , 0 ],
                [ 1,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1,  , 0 ],
                [ 1,  , 1, 1,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1 ],
                [ 1,  , 1, 1,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1 ],
                [ 1,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1,  ,  , 1 ],
                [ 1,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1,  ,  , 1 ],
                [ 1,  , 1, 1,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1 ],
                [ 1,  , 1, 1,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1 ],
                [  ,  , 1, 1,  ,  ,  ,  ,  , 1, 1, 1, 1, 1,  , 1 ],
                [  ,  , 1, 1,  ,  ,  ,  ,  , 1, 1, 1, 1, 1,  , 1 ],
                [ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
                [ 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1 ],
                [ 1, 1, 1, 1, 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1 ]
            ];
        favc.width = favc.height = 16;
        favctx.fillStyle = 'lime'
        favctx.beginPath();
        for( var y = 0; y < 16; y++ ) {
            for( var x = 0; x < 16; x++ ) {
                if( faviconGrid[ y ][ x ] === 1 ) {
                    favctx.rect( x, y, 1, 1 );
                }
            }
        }
        favctx.fill();
        favicon.href = favc.toDataURL();
    };
    renderFavicon()

}

