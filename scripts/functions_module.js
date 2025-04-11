// watchers: funções watchers vão monitorar o comportamento dos elementos
//            e criar ações a partir dos comandos definidos

// clickers: funções clickers vão obter o clique do usuário
//           e realizar os comandos definidos

export function clicker_menu_close(){
    // vai fechar o menu mobile quando houver clique

    let screen_size = window.innerWidth; // para mexer o menu conforme tamanho de tela

    let button_close = document.querySelector('.close_button')
    let menu_mobile = document.querySelector('.mobile_navigation')

    button_close.addEventListener('click', () =>{
        menu_mobile.style.transform = `translateX(${screen_size}px)`;
    })

}