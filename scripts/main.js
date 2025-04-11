// interactors: funções interactors vão observar e agir
//              conforme o comportamento do usuário e dos elementos

function interactor_menu_toggle(){
    // vai alterar o display dos menus conforme comandos
    let menu_mobile = document.querySelector('.mobile_navigation');
    let menu_mobile_button = document.querySelector('.mobile_menu');
    let button_close = document.querySelector('.close_button')

    let menu_desktop = document.querySelector('.desktop_navigation')
    let buttons_desktop = document.querySelector('.buttons_navigation')
    let screen_size = window.innerWidth;

    switch (true) {
        case (screen_size) <= 940: // tamanho médio
            menu_mobile_button.style.display = 'flex';
            menu_mobile.style.transform = `translateX(${screen_size}px)`;

            menu_mobile_button.addEventListener('click', ()=>{
                // só vai mostrar o menu mobile após o clique
                menu_mobile.style.visibility = 'visible';
                menu_mobile.style.opacity = '1';
                menu_mobile.style.transform = `translateX(0)`})

            button_close.addEventListener('click', () =>{
                // vai desaparecer após o clique
                menu_mobile.style.transform = `translateX(${screen_size}px)`;
                menu_mobile.style.visibility = 'hidden';
                menu_mobile.style.opacity = '0'; })

            //vai desaparecer o menu desktop
            menu_desktop.style.display ='none';
            buttons_desktop.style.display = 'none';
            
            break;
        
        case (screen_size) > 940: // tamanho médio
            menu_mobile.style.visibility = 'hidden';
            menu_mobile.style.opacity = '0';
            menu_mobile_button.style.display = 'none';


            menu_desktop.style.display ='flex';
            buttons_desktop.style.display = 'flex';
        default:
            break;
    }


}


// watchers: funções watchers vão observar o comportamento dos elementos
//            e criar ações a partir dos comandos definidos

function watcher_header_elements(){
// elementos do header não estão na mesma altura, essa função vai conertar isso
    let height_logo = document.querySelector('.logo_container').scrollHeight;;
    let height_menu = document.querySelector('.navigation_container').scrollHeight;
    let navigation_container = document.querySelector('.navigation_container')

    if(height_menu != height_logo){
        navigation_container.style.height = `${height_logo}px`;
    }


}



// clickers: funções clickers vão definir o comportamento do site
//           a partir do clique do usuário

function clickers_navigation(){
    let mobile_itemns = document.querySelectorAll('.')
}

// animators: funções animators vão criar animações personalizadas
function animator_welcome(){
// vai criar variações de bem vindo para todos os gêneros
    const welcome_words = ['bem-vinda', 'bem-vindo', 'bem-vinde'];
    let welcome_container = document.querySelector('.animation_hero');

    // criar uma var com o lenght das palavras para criar a animação
    const words_lenght = 9;

    



}







window.addEventListener('load', ()=>{
    watcher_header_elements()

    interactor_menu_toggle()

})

window.addEventListener('resize', ()=>{
    watcher_header_elements()

    interactor_menu_toggle()
})