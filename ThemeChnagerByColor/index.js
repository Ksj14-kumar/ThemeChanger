
        var body= document.querySelector('.container')
     

        document.querySelector('.items1').addEventListener('click',(e)=>{
            document.querySelector('.container').style.backgroundColor="#800000"
        })

       
        document.querySelector('.items2').addEventListener('click',(e=>{
            document.querySelector('.container').style.backgroundColor="#34495e"
        }))
        document.querySelector('.items3').addEventListener('click',(e=>{
            document.querySelector('.container').style.backgroundColor="#e74c3c"
        }))
        document.querySelector('.items4').addEventListener('click',(e=>{
            document.querySelector('.container').style.backgroundColor="#9b59b6"
        }))
        document.querySelector('.items5').addEventListener('click',(e=>{
            document.querySelector('.container').style.backgroundColor="#16a085"
        }))
        document.querySelector('.items6').addEventListener('click',(e=>{
            document.querySelector('.container').style.backgroundColor="#ecf0f1"
        }))




    // CHANGE THE THEME BY THE HELP OF LOCALSTORAGE

    var selectTheme=document.querySelector('#selectTheme')
    selectTheme.addEventListener('change',(e)=>{
        localStorage.setItem("theme",e.target.value)
        console.log(e.target.value)
        ChangeTheme(e.target.value)

    })
    function ChangeTheme(theme){
        if(theme==="red"){
            document.querySelector('.container').style.backgroundColor="#FF0000"

        }
        else if(theme==="green"){
            document.querySelector('.container').style.backgroundColor="#00FF00"

        }
        else if(theme==="black"){
            document.querySelector('.container').style.backgroundColor="#000000"

        }
        else if(theme==="blue"){
            document.querySelector('.container').style.backgroundColor="	#0000FF"

        }
        else{
            document.querySelector('.container').style.backgroundColor="#FFFFFF"


            
        }
    }