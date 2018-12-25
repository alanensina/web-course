{
    {
        {
            {
                var sera = "Será?"
            }
        }
    }
}

function escopo(){
    const local = 69
}

/*
Variáveis com var conseguem ser visualizadas foram do escopo atual, 
OBS: Isso não se aplica em funções.
*/
console.log(sera)
//console.log(local) - ReferenceError: local is not defined
