//$('selector').action()

//option 1
// $(document).ready( () => {

// })

//option 2
$(() =>{

    //Selectores
    //id="el-1" => "#el-1"
    //class="el-1" => ".el-1"
    //$("#el-1").hide()

    $(".hide-btn").click(() => {
        console.log('ocultando...')
        //$('h1').hide()
        $('h1').fadeOut()
    })

    $(".show-btn").click(() => {
        console.log('mostrando...')
        //$('h1').show()
        $('h1').fadeIn()
    })

    $("#el-1").click(() => {
        $("h1").css({color : "red"})
    })

    $("#el-2").click(() => {
        $("h1").css({color : "blue"})
    })

    $("#el-3").click(() => {
        $("h1").css({color : "green"})
    })

    $(".new-element").click(() => {
        $("ul").append("<li>item</li>");
        $("ul").prepend("<li>item</li>");
    })

})